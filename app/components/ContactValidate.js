import React from 'react';

export default function ContactValidate() {
    const validate = (e) => {
        // hides all the error elements on the page
        hideAllErrors();

        // checks if form has errors
        if (formHasErrors()){
            // stops the form from submitting
            e.preventDefault();
            return false;
        }

        return true;
    };

  
    const resetForm = (e) => {
        // ask for confirmation for resetting the form
        if(confirm('Clear Information?')) {
            // Ensure all error fields are hidden
            hideAllErrors();

            // set focus to the first text filed
            document.getElementById("myFname").focus();

            return true;
        }

        e.preventDefault();

        return false;
    };

    /*
     * Checks for all the errors for the form.
     *
     * retrun True if there is an error, otherwise return False.
     */
    const formHasErrors = () => {
        let requiredFields = ["myFname", "myLname", "myPhone", "myEmail"];
        let errorFlag = false;

        for (let i = 0; i < requiredFields.length; i++) {
            let field = document.getElementById(requiredFields[i]);

            if(!fieldHasInput(field)) {
                document.getElementById(requiredFields[i] + "_error").style.display = "block";
                if(!errorFlag) {
                    field.focus();
                    field.select();
                }

                errorFlag = true;
            }
        }

        // checking for phone number
        // creating object for regular expression
        let number = document.getElementById("myPhone").value.trim();

        if(number !== ""){
            let numberExpression = new RegExp(/^\d{10}$/); 
            if (!numberExpression.test(number)) {
                document.getElementById("phoneFormat_error").style.display = "block";
        
                if(!errorFlag) {
                    document.getElementById("myPhone").focus();
                    document.getElementById("myPhone").select();
                }
        
                errorFlag = true;
            }
        }
       
        // checking for email address
        // creating object for regular expression
        let emailAddress = document.getElementById("myEmail").value.trim();

        if(emailAddress !== "") {
            let emailExpression = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

            if(!emailExpression.test(emailAddress)) {
                document.getElementById("emailFormat_error").style.display = "block";
                
                if(!errorFlag){
                    document.getElementById("myEmail").focus();
                    document.getElementById("myEmail").select();
                }

                errorFlag = true;
            }
        }
        
        return errorFlag;
    };

    /*
     * Checks if a text filed has a input
     *
     * param field a text filed input element.
     * returns True if the element has input, else False.
     */
    const fieldHasInput = (field) => {
        // checks if the field has input or not
        if(field.value === null || field.value.trim() === "") {
            return false;
        }

        return true;
    };


    /*
     * Hides all of the error messages.
     */
    const hideAllErrors = () => {
        let errorMessages = document.getElementsByClassName("myInformation_error");
        
        for (let i = 0; i < errorMessages.length; i++) {
            errorMessages[i].style.display = "none";
        }
    };

    const load = () => {
        hideAllErrors();
        // adding event listener for the form submit
        document.getElementById("contact_form").addEventListener("submit", validate);
        document.getElementById("contact_form").addEventListener("reset", resetForm);
    };

    React.useEffect(() => {
        load();
    }, []);

    return (
        <div>
            <main style={styles.main}>
                <form id="contact_form" action="http://localhost:3000/#about" style={styles.form}>
                    <fieldset style={styles.fieldset}>
                        <h1 className="text-4xl font-mono text-center mt-10 text-black-500 font-bold">Contact Information</h1>
                        <hr />
                        <div style={styles.inputContainer}>
                            <label htmlFor="myFname" className="myInformation"><strong>First Name:</strong></label>
                            <input type="text" id="myFname" name="fname" maxLength="25" autoFocus />
                            <div className="myInformation_error" id="myFname_error">*Required Field: Please enter your first name.</div>
                        </div>

                        <div style={{ ...styles.inputContainer, marginBottom: '20px' }}>
                            <label htmlFor="myLname" className="myInformation"><strong>Last Name:</strong></label>
                            <input type="text" id="myLname" name="lname" maxLength="25" />
                            <div className="myInformation_error" id="myLname_error">*Required Field: Please enter your last name.</div>
                        </div>

                        <div style={styles.inputContainer}>
                            <label htmlFor="myPhone" className="myInformation"><strong>Phone Number:</strong></label>
                            <input type="tel" id="myPhone" name="phone" maxLength="25" />
                            <div className="myInformation_error" id="myPhone_error">*Required Field: Please enter your phone number.</div>
                            <div className="myInformation_error" id="phoneFormat_error">*Invalid phone number.</div>
                        </div>

                        <div style={styles.inputContainer}>
                            <label htmlFor="myEmail" className="myInformation"><strong>Email Address:</strong></label>
                            <input type="email" id="myEmail" name="email" maxLength="25" />
                            <div className="myInformation_error" id="myEmail_error">*Required Field: Please enter your email id.</div>
                            <div className="myInformation_error" id="emailFormat_error">*Invalid email address.</div>
                        </div>
                    </fieldset>
                    <fieldset id="feedback" style={styles.fieldset}>
                        <h1 className="text-4xl font-mono text-center mt-10 text-black-500 font-bold">Comments</h1>
                        <hr />
                        <div>
                            <label htmlFor="myFeedback" className="myInformation">Your Feedback</label><br />
                            <h3>Is there anything, I should work on. Feel free to share your advice 😊</h3>
                            <textarea name="feedback" id="myFeedback" cols="30" rows="8"></textarea>
                        </div>
                    </fieldset>

                    <fieldset id="buttons" style={styles.fieldset}>
                        <hr />
                        <button type="reset" id="reset" style={styles.button}>Reset</button>
                        <button type="submit" id="submit" style={styles.button}>Submit</button>
                    </fieldset>
                </form>
            </main>
        </div>
    );
}

const styles = {
    main: {
        padding: '20px',
    },
    form: {
        margin: '0 auto',
        maxWidth: '500px',
    },
    fieldset: {
        border: 'none',
        marginBottom: '20px',
    },
    inputContainer: {
        marginBottom: '10px',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#333',
        color: 'white',
        cursor: 'pointer',
        marginRight: '10px',
    },
};

export { ContactValidate }; // Export ContactValidate for testing
