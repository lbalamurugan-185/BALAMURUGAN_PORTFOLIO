class student:
    def __init__(self,name,id,dept,marks):
        self.name=name
        self.id=id
        self.attendance=0
        self.dept=dept
        self.marks=marks
    def display(self):
        return f"name:{self.name} \n id:{self.id} \n dept:{self.dept} \n marks:{self.marks}"

        

std1=student("arun","ai101","AI",[80,55,89])
std2=student("varun","ai102","AI",[90,55,78])

print(std1)
print(std1)

