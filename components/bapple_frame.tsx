'use server'
import { promises as fs } from 'fs';

const BappleFrame = async () => {
  const rawHTML: string = await fs.readFile("/frames/0.html", "utf-8");
  return <div className="flex justify-center"  dangerouslySetInnerHTML={{__html: rawHTML}}/>
}

export default BappleFrame;