from django.db import models

# Create your models here.
class products(models.Model):
    products_name=models.CharField(max_length=250,default='YourDefaultValueHere')
    products_image=models.ImageField(upload_to="Product",blank=True,null=True)
    products_price=models.IntegerField()
    products_description=models.TextField()
    products_location=models.CharField(max_length=250)
    farmers_name=models.CharField(max_length=250)
    def __str__(self):
        return self.products_name
    
class recommend(models.Model):
    product_name=models.CharField(max_length=250)
    product_image=models.ImageField(upload_to="Product",blank=True,null=True)
    product_price=models.IntegerField()
    farmer_name=models.CharField(max_length=250)
    def __str__(self):
        return self.product_name
    
class carts(models.Model):
    carts_title=models.CharField(max_length=250)
    carts_image=models.ImageField(upload_to="Product",blank=True,null=True)
    carts_name=models.CharField(max_length=250)
    def __str__(self):
        return self.carts_title
    
class farmer_user(models.Model):
    user_name=models.CharField(max_length=250)
    user_mobileno=models.CharField(max_length=250)
    user_Email=models.CharField(max_length=250)
    user_address=models.TextField()
    user_password=models.CharField(max_length=250)
    def __str__(self):
        return self.user_name
    
class sell(models.Model):
    sell_name=models.TextField()
    sell_image=models.ImageField(upload_to="sell",blank=True,null=True)
    sell_price=models.TextField()
    sell_description=models.TextField()
    def __str__(self):
        return self.sell_name

class customer_user(models.Model):
    user_name=models.CharField(max_length=250)
    user_mobileno=models.CharField(max_length=250)
    user_Email=models.CharField(max_length=250)
    user_address=models.TextField()
    user_password=models.CharField(max_length=250)
    def __str__(self):
        return self.user_name