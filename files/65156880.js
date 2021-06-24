jQuery(function($){
    
    $('.plus').on('click', function(e) {
        var val = parseInt($(this).prev('input').val());
        $(this).prev('input').val(val + 1).change();
    });
    
    $('.minus').on('click', function(e) {
        var val = parseInt($(this).next('input').val());
        if (val !== 0) {
            $(this).next('input').val(val - 1).change();
        }
    });
    
    $('.add-links').on('change', '.qty', function(event) {
        
        $(this).parents('.add-links').find('a.ajax_add_to_cart').attr('data-quantity',  + $(this).val());
    });
    
    $('.qty').change();
    
});
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<div class="add-links clearfix">
    <div class="quantity buttons_added">
        <button type="button" value="-" class="minus">-</button>
        <input type="number" class="input-text qty text" step="1" min="1" max="" name="quantity" value="1" size="4" inputmode="numeric">
        <button type="button" value="+" class="plus">+</button>
    </div>
    <a href="#" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
</div>

<div class="add-links clearfix">
    <div class="quantity buttons_added">
        <button type="button" value="-" class="minus">-</button>
        <input type="number" class="input-text qty text" step="1" min="1" max="" name="quantity" value="1" size="4" inputmode="numeric">
        <button type="button" value="+" class="plus">+</button>
    </div>
    <a href="#" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
</div>

<div class="add-links clearfix">
    <div class="quantity buttons_added">
        <button type="button" value="-" class="minus">-</button>
        <input type="number" class="input-text qty text" step="1" min="1" max="" name="quantity" value="1" size="4" inputmode="numeric">
        <button type="button" value="+" class="plus">+</button>
    </div>
    <a href="#" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
</div>