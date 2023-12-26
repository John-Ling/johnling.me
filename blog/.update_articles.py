#!/usr/bin/python3
import os
import requests
import json
from dotenv import load_dotenv

load_dotenv()

def main():

    titles, dates = [], []
    for folder in os.listdir("./articles"):
        filepath = os.path.join("./articles", folder)
        title, date = get_title_and_publishing_date(filepath)
        titles.append(title)
        dates.append(date)

        html = markdown_to_html(filepath)
        if html is not None:
            generate_html_file(html, filepath, title)
        
    update_articles(titles, dates)

def generate_html_file(content, filepath, title):
    HTML = f"""
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{title}</title> 
        <link href="/assets/css/fonts.css" rel="stylesheet">
        <link rel="stylesheet" href="/assets/css/blog.css">
        <link rel="stylesheet" href="/assets/css/article.css">
        <link rel="shortcut icon" href="/assets/favicon.ico">
    </head>
    <body>
        <main>
            {content}
        </main>
        <footer>
            <p>Made by John Ling</p>
            <p>Source code at <a href="https://github.com/John-Ling/johnling.me" class="link">Github</a></p>
            <p><a href="/" id="return-link"><span class="link">Return Home</span></a></p>
        </footer>
    </body>
</html>
"""
    
    with open(os.path.join(filepath, "index.html"), 'w') as file:
        file.write(HTML)
    return

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

def markdown_to_html(filepath):
    file = open(os.path.join(filepath, "index.md"), 'r')
    content = file.read()

    HEADERS = {"Accept": "application/vnd.github+json", "Authorization": f"Bearer {os.environ['API_TOKEN']}", "X-GitHub-Api-Version": "2022-11-28"}
    PAYLOAD = json.dumps({"text": content})

    file.close()

    response = requests.post("https://api.github.com/markdown", headers=HEADERS, data=PAYLOAD)

    if response.status_code != 200:
        print(f"Error: {response.status_code}")
        return
    return response.text

def get_title_and_publishing_date(filepath):
    file = open(os.path.join(filepath, "index.md"), 'r')
    title = file.readline()[2:]
    date = file.readline()[1:-2]
    file.close()
    return title, date

if __name__ == "__main__":
    main()
