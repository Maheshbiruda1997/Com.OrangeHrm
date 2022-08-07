package Stepdefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.*;

public class orghrm {

	WebDriver driver;
	@Given("^user is on login page$")
	public void user_is_on_login_page() {
		System.setProperty("webdriver.chrome.driver","C:/Users/Ranjith/workspace/Com.OrangeHrm/src/test/resources/Drivers/chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}

	@When("^user enters username and password$")
	public void user_enters_username_and_password() {
		driver.get("https://opensource-demo.orangehrmlive.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		// print title
		String title = driver.getTitle();
		System.out.println("Title of the page: " + title);
		// print current url
		String url = driver.getCurrentUrl();
		System.out.println("URL of the Page: " + url);
		driver.findElement(By.id("txtUsername")).clear();
		driver.findElement(By.id("txtUsername")).sendKeys("Admin");
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.findElement(By.id("txtPassword")).clear();
		driver.findElement(By.id("txtPassword")).sendKeys("admin123");
	}

	@When("^clicks on login button$")
	public void clicks_on_login_button(){
		driver.findElement(By.id("btnLogin")).click();
	}

	@Then("^user is navigated to home page$")
	public void user_is_navigated_to_home_page(){
		String homepage = driver.getTitle();
		System.out.println("Home Page Title: " +homepage);
	}


	@When("^user click on welcome link$")
	public void user_click_on_welcome_link(){
		driver.findElement(By.xpath("//a[@id='welcome']")).click();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		//driver.findElement(By.xpath("/html/body/div[1]/div[1]/div[9]/ul/li[3]/a")).click();
	}

	@Then("^logout link is displayed$")
	public void logout_link_is_displayed(){
		driver.findElement(By.xpath("/html/body/div[1]/div[1]/div[9]/ul/li[3]/a")).click();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.close();
	}

	@When("^user clicks on dashboard link$")
	public void user_clicks_on_dashboard_link(){
		driver.findElement(By.xpath("//a[@id='menu_dashboard_index']")).click();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//b[normalize-space()='Leave']")).click();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@id='calFromDate']")).click();
		driver.findElement(By.xpath("//input[@id='calFromDate']")).sendKeys("2022-07-20");
		driver.findElement(By.xpath("//input[@id='calToDate']")).clear();
		driver.findElement(By.xpath("//input[@id='calToDate']")).sendKeys("2022-07-25");
		driver.findElement(By.xpath("//input[@id='btnSearch']")).click();
		driver.close();


	}

	@Then("^quick launch toolbar is present$")
	public void quick_launch_toolbar_is_present() { 
		
	}



	@When("^user clicks on PIM$")
	public void user_clicks_on_PIM() throws InterruptedException{
		Thread.sleep(2000);
		driver.findElement(By.xpath("//a[@id='menu_pim_viewPimModule']")).click();
	}

    @Then("^user enter \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enter_and_and(String EmployeeName, String Id, String Supervisor) throws Throwable {
	
		driver.findElement(By.xpath("//input[@id='empsearch_employee_name_empName']")).clear();
		driver.findElement(By.xpath("//input[@id='empsearch_employee_name_empName']")).sendKeys(EmployeeName);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@id='empsearch_id']")).clear();
		driver.findElement(By.xpath("//input[@id='empsearch_id']")).sendKeys(Id);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@id='empsearch_supervisor_name']")).clear();
		driver.findElement(By.xpath("//input[@id='empsearch_supervisor_name']")).sendKeys(Supervisor);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

	}

	@Then("^user select the employee details with dropdowns$")
	public void user_select_the_employee_details_with_dropdowns(){
		WebElement empstatus = driver.findElement(By.xpath("//select[@id='empsearch_employee_status']"));
		Select select1 = new Select(empstatus);
		select1.selectByIndex(4);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

		
		WebElement empinclude = driver.findElement(By.xpath("//select[@id='empsearch_termination']"));
		Select select2 = new Select(empinclude);
		select2.selectByIndex(0);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

		WebElement jobtitle = driver.findElement(By.xpath("//select[@id='empsearch_job_title']"));
		Select select3 = new Select(jobtitle);
		select3.selectByIndex(4);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

		WebElement subunit = driver.findElement(By.xpath("//select[@id='empsearch_sub_unit']"));
		Select select4 = new Select(subunit);
		select4.selectByIndex(1);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
		driver.findElement(By.xpath("//input[@id='searchBtn']")).click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@id='ohrmList_chkSelectRecord_3']")).click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		



	}

	@Then("^click on search$")
	public void click_on_search() {
		
		driver.findElement(By.xpath("//input[@id='btnAdd']")).click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.close();
		
	}

	
	
}
