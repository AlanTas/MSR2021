add_filter('woocommerce_coupon_get_discount_amount', 'woocommerce_discount_from_the_original_price', 10, 5 );

function woocommerce_discount_from_the_original_price( $discount, $discounting_amount, $cart_item, $single, $coupon ) {

  if ($coupon->discount_type == 'percent' && $coupon->code == 'fifty') {

    $discount_percentage = $coupon->amount / 100;
    $item                = wc_get_product($cart_item['product_id']);

    if ($item) {
      if ( $item->is_type( 'simple' ) ) {
        $sale_price    = $item->sale_price;
        $regular_price = $item->regular_price;
        if ( ($sale_price && $regular_price) && ($sale_price !==  $regular_price) ) {
          $discount_from_regular_price = $regular_price * $discount_percentage; 
          $discount = $discounting_amount - ($discount_from_regular_price * $cart_item['quantity']); 
        }

      } elseif ( $item->is_type( 'variable' ) ) {
        $variable_product = new WC_Product_Variation( $cart_item["variation_id"] );
        $sale_price    = $variable_product->sale_price;
        $regular_price = $variable_product->regular_price;
        
        if ( ($sale_price && $regular_price) && ($sale_price !==  $regular_price) ) {
          $discount_from_regular_price = $regular_price * $discount_percentage;
          $discount = $discounting_amount - ($discount_from_regular_price * $cart_item['quantity']);
        }

      }
    }

  }
  return $discount;
}
