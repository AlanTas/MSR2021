inp.onchange = async (evt) => {
  const stream = inp.files[ 0 ].stream();
  const reader = stream.getReader();
  while( true ) {
    const { done, value } = await reader.read();
    if( done ) { break; }
    handleChunk( value );
  }
  console.log( "all done" );
};

function handleChunk( buf ) {
  console.log( "received a new buffer", buf.byteLength );
}
inp.onchange = async (evt) => {
  const file = inp.files[ 0 ];
  const chunksize = 64 * 1024;
  let offset = 0;
  while( offset < file.size ) {
    const chunkfile = await file.slice( offset, offset + chunksize );
    // Blob.arrayBuffer() can be polyfilled with a FileReader
    const chunk = await chunkfile.arrayBuffer();
    handleChunk( chunk );
    offset += chunksize;
  }
  console.log( "all done" );
};

function handleChunk( buf ) {
  console.log( "received a new buffer", buf.byteLength );
}