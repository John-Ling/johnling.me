import { promises as fs } from 'fs';
import JSZip from 'jszip';

export async function GET() {
    // download binary content of zip file
    const zip: Response = await fetch("http://localhost:3000/frame.zip");

    const binaryContent: Blob = await zip.blob();
    const content: ArrayBuffer = await binaryContent.arrayBuffer();

    const jsZip = new JSZip();
    const file = await jsZip.loadAsync(content);
    const data = await file.file("frames.txt")!.async("string");
    console.log(data);
    console.log('Done');
    
    return new Response("Frames unzipped", {
        status: 200,
    });
}