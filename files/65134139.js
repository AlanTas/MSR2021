async function matchReport(shop, arr) {
    
    const matches = await Promise.all(arr.map(async filename => {
       
        const reportData = await csv().fromFile( filename );

        if( reportData[0]['Work'].match(shop.productRegex) ){
        
            return filename;
            
        }
        
    }));
    
    return {
        'shop': shop.name,
        'reports': matches.filter( Boolean )
    };
    
}