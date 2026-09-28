class person:
    def __init__(self,name,email):
        self.name=name
        self.email=email
    def display_role():
        return "university person"
    
class student(person):
    def __init__(self, name, email,dept):
        super().__init__(name, email)
        self.dept=dept
     def display_role():
            return "student"

class teacher(student):
    def __init__(self, name, email, dept,subject):
        super().__init__(name, email, dept)
        self.subject=subject
     def display_role():
            return "university teacher"

std1= 