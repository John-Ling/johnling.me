#!/usr/bin/python3

from PIL import Image
import sys
import os

# usual size to go with is 756x1008

def main():
    if len(sys.argv) < 2:
        print("Run with file path")
        quit()
    resolution = sys.argv[1]
    width, height = resolution.split('x')
    width, height = int(width), int(height)
    rootPath = sys.argv[2]
    files = sys.argv[3:]
    for file in files:
        image = Image.open(os.path.join(rootPath, file))
        image = image.resize((width, height))
        image.save(os.path.join(rootPath, file))


if __name__ == "__main__":
    main()