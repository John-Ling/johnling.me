#!/usr/bin/python3
import os

def main():
    MarkdownToHTML("./articles/my-entire-system-in-depth")
            
class MarkdownToHTML:
    # takes markdown text and converts certain patterns to their html counterparts for css styling
    # links, images and italics are converted 
    def __init__(self, folder):
        self.index = 0
        self.content = ""
        self.output = ""
        self.convert_markdown(folder)
    
    def advance(self, n=1):
        if self.index + n == len(self.content):
            print("Error")
            quit()

        self.index += n
    
    def peek(self, character):
        if self.index + 1 == len(self.content):
            print("Error")
            quit()
        
        if self.content[self.index + 1] == character:
            return True
        return False
    
    def convert_markdown(self, filepath):
        # generate index.html for article 

        file = None
        try:
            file = open(os.path.join(filepath, "index.md"), 'r')
        except FileNotFoundError:
            print(f"Cannot find index markdown file at path {filepath}")
        
        self.content = file.read()
        while self.index < len(self.content) - 1:
            character = self.content[self.index]
            if character == '!': 
                self.output += self.handle_image()
            elif character == '[':
                self.output += self.handle_link()
            elif character == '_':
                self.output += self.handle_italics()
            else:
                self.output += character
            
            self.advance()

        TITLE = filepath.split('/')[-1]
        HTML = f"""
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{TITLE}</title> 
        <script type="module" src="https://md-block.verou.me/md-block.js"></script>
        <link href="/assets/css/fonts.css" rel="stylesheet">
        <link rel="stylesheet" href="/assets/css/blog.css">
        <link rel="stylesheet" href="/assets/css/article.css">
        <link rel="shortcut icon" href="/assets/favicon.ico">
    </head>
    <body>
        <main>
            <md-block>
                {self.output}
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
        with open(f"{filepath}/index.html", 'w') as file:
            file.write(HTML)
    
        return
    
    def handle_image(self):
        if not self.peek('['):
            return '!'
            
        description = ""
        path = ""

        self.advance(2)
        while self.content[self.index] != ']':
            description += self.content[self.index]
            self.advance()
        
        if not self.peek('('): # not a link just something in square brackets
            return f"[{description}]"
        
        self.advance(2)
        while self.content[self.index] != ')':
            path += self.content[self.index]
            self.advance()
        
        return f"<img src=\"{path}\" alt=\"{description}\" class=\"image\"/>"
    
    def handle_link(self):
        destination = ""
        linkText = ""

        self.advance()
        while self.content[self.index] != ']':
            linkText += self.content[self.index]
            self.advance()
        
        if not self.peek('('): # not a link just something in square brackets
            return f"[{linkText}]"
        
        self.advance(2)
        while self.content[self.index] != ')':
            destination += self.content[self.index]
            self.advance()
        return f"<a href=\"{destination}\" class=\"link\">{linkText}</a>"

    def handle_italics(self):
        content = ""
        self.advance()
        while self.content[self.index] != '_':
            content += self.content[self.index]
            self.advance()
        return f"<span class=\"muted\">{content}</span>"

if __name__ == "__main__":
    main()
