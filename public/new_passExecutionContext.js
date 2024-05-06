// This should be added to the forms OnLoad event
function passContextToWebResource(executionContext) {
    // Name of the Web Resource on the form
    const webResourceName = "WebResource_new_test";

    let formContext = executionContext.getFormContext();
    let webResouceControl = formContext.getControl(webResourceName);
    if (webResouceControl) {
        webResouceControl.getContentWindow().then((contentWindow) => {
            //call our function to pass Xrm and formContext
            contentWindow.setClientApiContext(Xrm, formContext);
        });
    }
}
