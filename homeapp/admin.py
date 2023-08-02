from django.contrib import admin
from .models import Project,Service,Product,Worker


admin.site.register(Project)
admin.site.register(Service)
admin.site.register(Product)
admin.site.register(Worker)

