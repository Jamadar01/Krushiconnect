from rest_framework import serializers
from .models import products,recommend,carts,farmer_user,sell,customer_user
class productserializer(serializers.ModelSerializer):
    class Meta:
        model=products
        fields=('products_name','products_image','products_price','products_description','products_location','farmers_name')

class recommendation(serializers.ModelSerializer):
    class Meta:
        model=recommend
        fields=('product_name','product_image','product_price','farmer_name')

class cart(serializers.ModelSerializer):
    class Meta:
        model=carts
        fields=('carts_title','carts_image','carts_name')

class farmerserializer(serializers.ModelSerializer):
    class Meta:
        model=farmer_user
        fields=('user_name','user_mobileno','user_Email','user_address','user_password')

class sellserializer(serializers.ModelSerializer):
    class Meta:
        model=sell
        fields=('sell_name','sell_image','sell_price','sell_description')

class customers_user(serializers.ModelSerializer):
    class Meta:
        model=customer_user
        fields=('user_name','user_mobileno','user_Email','user_address','user_password')





