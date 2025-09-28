#!/bin/python3
import os

# copies assets folder in all posts under posts directory
# to public folder so they can be served

POSTS_PATH = "posts/"
PUBLIC_PATH = "public/images/blog/"

def main():
    print("Moving blog assets to public folder")
    postFolders = os.listdir(POSTS_PATH)
    for folder in postFolders:

        # copy assets folder to public directory
        path = os.path.join(POSTS_PATH, folder)
        print(path)
        assetsPath = os.path.join(path, "assets/")
        
        contentPath = os.path.join(path, "content.mdx")
        if not os.path.exists(contentPath):
            print(f"Can't find find content.mdx file under {folder}. Trying to find content.md")

            contentPath = os.path.join(path, "content.md")
            if not os.path.exists(contentPath):
                print(f"Can't find content.md file under {folder}")
                continue
                
        
        blogPath = os.path.join(PUBLIC_PATH, folder)
        if not os.path.exists(blogPath):
            print("Folder does not exist. Creating")
            os.mkdir(blogPath)
        
        print("Copying")

        
        if not os.path.exists(assetsPath):
            print(f"Can't find assets folder under {folder}")
            continue
        
        # try moving content in assets folder to public 
        os.system(f"cp {assetsPath}/* {blogPath}")
        # delete assets 
        os.system(f"rm -rf {assetsPath}")

if __name__ == "__main__":
    main()


import yfinance as yf
import requests
import time

# assume segmentA and segmentB are the partitioned dataframes 
companiesA = segmentA["Ticker"].unique()
companiesB = segmentB["Ticker"].unique()

tickers= list(set(companiesA).intersection(companiesB))

data = yf.Ticker("AMZN")
print(data.info["displayName"])
companyCount = len(tickers)
print(companyCount)
with open("companies.txt", 'w') as f:
  currentCompany = 1
  attempts = 1
  while currentCompany <= companyCount:
      if attempts >= 3:
          currentCompany += 1
          attempts = 1
          continue
      try:
          ticker = tickers[currentCompany - 1]
          print(ticker)
          data = yf.Ticker(ticker)
          name = data.info["displayName"]
          print(name)
          f.write(f"{name}\n")
          currentCompany += 1
          attempts = 1
      except:
          # exponential backoff because sometimes the library fails 
          time.sleep(2**attempts)
          attempts += 1
          continue