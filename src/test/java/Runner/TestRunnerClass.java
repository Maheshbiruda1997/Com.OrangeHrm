package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(    
		features = "C:/Users/Ranjith/workspace/Com.OrangeHrm/src/test/java/Features"
		,glue = {"Stepdefinitions"}
		,plugin = {"pretty","html:test-out","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"}
		,monochrome = true
		,dryRun = false
		,strict = true
		,tags = {"@smoke,@regression"}
		)

public class TestRunnerClass {

}
