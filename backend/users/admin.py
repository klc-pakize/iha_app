from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User


@admin.register(User)
class UserUserAdmin(UserAdmin):

    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('phone',)}),
    )


admin.site.unregister(User)
admin.site.register(User, UserUserAdmin)