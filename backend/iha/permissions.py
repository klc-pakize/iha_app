from rest_framework import permissions

class IsStaffOrReadOnly(permissions.IsAdminUser):
#! IHA can only do get after users, and post can only be done if they are user staff.
#! IHA'ları herkes görüntüleyebilir ve post, delete, patch ve put işlemlerini ancak kullanıcı staff ise yapılabilir.
    def has_permission(self, request, view):
        if request.method == 'GET':
            return True
        return bool(request.user and request.user.is_staff)