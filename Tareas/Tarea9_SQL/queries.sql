--List the following details of each employee: employee number, 
--last name, first name, gender, and salary.
SELECT employees.emp_no, employees.last_name, employees.first_name, employees.gender, salaries.salary FROM employees
INNER JOIN salaries on employees.emp_no = salaries.emp_no;

--List employees who were hired in 1986.
SELECT first_name as "First Name", last_name as "Last Name", hire_date as "Hire Date" FROM employees
WHERE hire_date > '1986-01-01';

---List the manager of each department with the following information: 
--department number, department name, the manager's employee number, 
--last name, first name, and start and end employment dates.
SELECT dept_manager.dept_no, departments.dept_name, employees.emp_no, employees.first_name, employees.last_name, dept_manager.from_date, dept_manager.to_date FROM dept_manager 
INNER JOIN departments ON dept_manager.dept_no = departments.dept_no
INNER JOIN employees ON dept_manager.emp_no = employees.emp_no;

--List the department of each employee with the following information: 
--employee number, last name, first name, and department name.
SELECT employees.emp_no, employees.last_name, employees.first_name,
departments.dept_name FROM departments
INNER JOIN dept_emp ON departments.dept_no = dept_emp.dept_no
INNER JOIN employees ON dept_emp.emp_no = employees.emp_no;

--List all employees whose first name is "Hercules" 
--and last names begin with "B."
SELECT * FROM employees
WHERE first_name = 'Hercules' AND last_name LIKE 'B%';

---List all employees in the Sales department, including their 
---employee number, last name, first name, and department name.
SELECT employees.emp_no, departments.dept_name, employees.last_name, employees.first_name from departments
INNER JOIN dept_emp ON departments.dept_no = dept_emp.dept_no
INNER JOIN employees ON dept_emp.emp_no = employees.emp_no
WHERE dept_name = 'Sales';

--List all employees in the Sales and Development departments, including their 
--employee number, last name, first name, and department name.
SELECT employees.emp_no, employees.last_name, employees.first_name, departments.dept_name from departments
INNER JOIN dept_emp ON departments.dept_no = dept_emp.dept_no
INNER JOIN employees ON dept_emp.emp_no = employees.emp_no
WHERE dept_name = 'Sales' OR dept_name = 'Development';


--In descending order, list the frequency count of employee last names, i.e., 
--how many employees share each last name.
SELECT DISTINCT last_name, COUNT(last_name) AS Frequency FROM employees
GROUP BY last_name
ORDER BY
COUNT(last_name) DESC

