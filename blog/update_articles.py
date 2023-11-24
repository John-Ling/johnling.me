#!/usr/bin/python3
import os

def main():
    titles, dates = [], []
    for folder in os.listdir("./articles"):
        title, date = MarkdownToHTML(os.path.join("./articles", folder)).get_article_information()
        titles.append(title)
        dates.append(date)
    update_articles(titles, dates)

def update_articles(titles, dates):
    for index, title in enumerate(titles):
        articleTitle = title
        linkTitle = title.lower().replace(' ', '-')

        authorDate = ""
        if dates[index] is not None:
            authorDate = dates[index]

        ARTICLE_TEMPLATE = f"""
                    <div class="article static-hidden-slide">
                        <h3>{articleTitle}</h3>
                        <h4 class="muted">{authorDate}</h4>
                        <a class="link" href="/blog/articles/{linkTitle}/">Article</a>
                    </div>\n
        """

        with open("./index.html", 'r') as file:
            lines = file.readlines()
        lines.insert(61, ARTICLE_TEMPLATE)

        with open("./index.html", 'w') as modified:
            modified.writelines(lines)

class MarkdownToHTML:
    # takes markdown text and converts certain patterns to their html counterparts for css styling
    # links, images and italics are converted 
    def __init__(self, folder):
        self.__date = None
        self.__title = None

        self.__index = 0
        self.__content = ""
        self.__output = ""
        self.__convert_markdown(folder)
    
    def get_article_information(self):
        return (self.__title, self.__date)
    
    def __advance(self, n=1):
        if self.__index + n == len(self.__content):
            print("Error")
            quit()

        self.__index += n
    
    def __peek(self, character):
        if self.__index + 1 == len(self.__content):
            print("Error")
            quit()
        
        if self.__content[self.__index + 1] == character:
            return True
        return False

    def __convert_markdown(self, filepath):
        # generate index.html for article 

        file = None
        try:
            file = open(os.path.join(filepath, "index.md"), 'r')
        except FileNotFoundError:
            print(f"Cannot find index markdown file at path {filepath}")
    
        self.__content = file.read()
        while self.__index < len(self.__content) - 1:
            character = self.__content[self.__index]
            if character == '!': 
                self.__output += self.__handle_image()
            elif character == '[':
                self.__output += self.__handle_link()
            elif character == '_':
                self.__output += self.__handle_italics()
            else:
                self.__output += character

            self.__advance()

        file.close()
        file = open(os.path.join(filepath, "index.md"), 'r')
        self.__title = file.readline()[1:].strip()
        self.__date = file.readline()[1:-2].strip()
        HTML = f"""
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{self.__title}</title> 
        <script type="module" src="https://md-block.verou.me/md-block.js"></script>
        <link href="/assets/css/fonts.css" rel="stylesheet">
        <link rel="stylesheet" href="/assets/css/blog.css">
        <link rel="stylesheet" href="/assets/css/article.css">
        <link rel="shortcut icon" href="/assets/favicon.ico">
    </head>
    <body>
        <main>
            <md-block>
                {self.__output}
            </md-block>
        </main>
        <footer>
            <p>Made by John Ling</p>
            <p>Source code at <a href="https://github.com/John-Ling/johnling.me" class="link">Github</a></p>
            <p><a href="/" id="return-link"><span class="link">Return Home</span></a></p>
        </footer>
    </body>
</html>
        """
        file.close()
        with open(f"{filepath}/index.html", 'w') as file:
            file.write(HTML)

        return

    def __handle_image(self):
        if not self.__peek('['):
            return '!'
            
        description = ""
        path = ""

        self.__advance(2)
        while self.__content[self.__index] != ']':
            description += self.__content[self.__index]
            self.__advance()
        
        if not self.__peek('('): # not a link just something in square brackets
            return f"[{description}]"
        
        self.__advance(2)
        while self.__content[self.__index] != ')':
            path += self.__content[self.__index]
            self.__advance()
        
        return f"<img src=\"{path}\" alt=\"{description}\" class=\"image\"/>"
    
    def __handle_link(self):
        destination = ""
        linkText = ""

        self.__advance()
        while self.__content[self.__index] != ']':
            linkText += self.__content[self.__index]
            self.__advance()
        
        if not self.__peek('('): # not a link just something in square brackets
            return f"[{linkText}]"
        
        self.__advance(2)
        while self.__content[self.__index] != ')':
            destination += self.__content[self.__index]
            self.__advance()
        return f"<a href=\"{destination}\" class=\"link\">{linkText}</a>"

    def __handle_italics(self):
        content = ""
        self.__advance()
        while self.__content[self.__index] != '_':
            content += self.__content[self.__index]
            self.__advance()
        return f"<span class=\"muted\">{content}</span>"

if __name__ == "__main__":
    main()
