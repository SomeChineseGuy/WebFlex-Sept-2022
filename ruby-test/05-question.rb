# Given a class of employee, create a class of school that will train employee skill_level.

class Employee

  def initialize
    @skill_level = 1
  end

  def upskill
    @skill_level += 1
  end

  def skill_level
    @skill_level
  end

end

class School 
  def train employee
    employee.upskill
  end
end


employee = Employee.new
puts employee.skill_level

school = School.new
school.train employee
puts employee.skill_level