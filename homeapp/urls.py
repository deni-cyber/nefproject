from django.urls import path
from . import views


urlpatterns = [
    path("", views.home_view, name='home'),
    path("about/", views.about_view, name='about'),
    path("projects/", views.projects_view, name='projects'),
    path("contact/", views.contact_view, name='contact'),
    path("products/", views.contact_view, name='products'),
    path("services/", views.contact_view, name='services'),

]

