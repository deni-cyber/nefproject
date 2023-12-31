from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from homeapp.models import Project, Service, Product,Worker

def home_view(request):
    projects = Project.objects.all()
    products=Product.objects.all()
    services = Service.objects.all()
    context = {'services':services,'products':products,'projects': projects}
    return render(request, 'homeapp/home.html', context)

def about_view(request):
    services=Service.objects.all()
    products=Product.objects.all()
    workers=Worker.objects.all()
    template = loader.get_template('homeapp/about.html')
    context = {'services':services,'products':products,'workers':workers}
    return HttpResponse(template.render(context, request))

def products_view(request):
    products=Product.objects.all()
    template = loader.get_template('homeapp/products.html')
    context = {'products':products}
    return HttpResponse(template.render(context, request))

def services_view(request):
    services=Service.objects.all()
    template = loader.get_template('homeapp/services.html')
    context = {'services':services}
    return HttpResponse(template.render(context, request))
    
def projects_view(request):
    projects = Project.objects.all()
    context = {'projects': projects}
    return render(request, 'homeapp/projects.html', context)


def contact_view(request):
    
    template = loader.get_template('homeapp/contact.html')
    context = {}
    return HttpResponse(template.render(context, request))
