from django.contrib import admin
from .models import products,recommend,carts,farmer_user,sell,customer_user
# Register your models here.
admin.site.register(products)
admin.site.register(recommend)
admin.site.register(carts)
admin.site.register(farmer_user)
admin.site.register(customer_user)
admin.site.register(sell)