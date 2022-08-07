Feature: check OrangeHrm home page functionality 


Background: user is logged in 

	Given user is on login page 
	When user enters username and password 
	And clicks on login button 
	Then user is navigated to home page 
@regression	
Scenario: check logout link 

	When user click on welcome link 
	Then logout link is displayed 
@smoke
Scenario: verify quick launch toolbar is present 

	When user clicks on dashboard link 
	Then quick launch toolbar is present 
@smoke @regression	
Scenario Outline: verify the employee details 
	When user clicks on PIM 
	Then user enter "<EmployeeName>" and "<Id>" and "<Supervisor>" 
	And user select the employee details with dropdowns 
	And click on search 
	
	Examples: 
		|EmployeeName|Id|Supervisor|
		|Peter|0007|John Smith|
