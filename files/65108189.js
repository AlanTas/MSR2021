hot2.addHook( 'afterChange', function( changes, src ) {
  [
    [row, prop, oldVal, newVal] 
  ] = changes;
  if ( prop == 0 && hot2.getDataAtRowProp( row, prop + 1 ) && newVal?.length > 0 ) {
    // delete value of cell 2 if cell 1 has a value
    hot2.setDataAtCell( row, prop + 1, '' );
  } else if ( prop == 1 && hot.getDataAtRowProp( row, prop - 1 ) && newVal?.length > 0 ) {
    // delete value of cell 1 if cell 2 has a value
    hot2.setDataAtCell( row, prop -1, '' );
  }
})


hot2.updateSettings( {
   cells: function ( row, col, prop ) {
     cellProperties = {};

     if ( prop == 1 && hot2.getDataAtRowProp( row, prop - 1 ) ) {
       // this disables cell 2 if cell 1 has a value
       cellProperties.readOnly = true;
     } else if ( prop == 0 && hot2.getDataAtRowProp( row, prop + 1 ) ) {
       // this disables cell 1 if cell 2 has a value
       cellProperties.readOnly = true;
     } else {
       cellProperties.readOnly = false;
     }
     return cellProperties;
   }
})
