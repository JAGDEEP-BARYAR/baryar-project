import React from 'react';

export default function Contact() {
    return (
        <div>
            <main style={styles.main}>
                <form method="post" id="contact_form" action="http://localhost:3000/#about" style={styles.form}>
                    <fieldset style={styles.fieldset}>
                        <h1 className="text-4xl font-mono text-center mt-10 text-black-500 font-bold">Contact Information</h1>
                        <hr />
                        <div style={styles.inputContainer}>
                            <label htmlFor="myFname" className="myInformation"><strong>First Name:</strong></label>
                            <input type="text" id="myFname" name="fname" maxLength="25" autoFocus />
                        </div>

                        <div style={{ ...styles.inputContainer, marginBottom: '20px' }}> {/* Added marginBottom */}
                            <label htmlFor="myLname" className="myInformation"><strong>Last Name:</strong></label>
                            <input type="text" id="myLname" name="lname" maxLength="25" />
                        </div>

                        <div style={styles.inputContainer}>
                            <label htmlFor="myPhone" className="myInformation"><strong>Phone Number:</strong></label>
                            <input type="tel" id="myPhone" name="phone" maxLength="25" />
                        </div>

                        <div style={styles.inputContainer}>
                            <label htmlFor="myEmail" className="myInformation"><strong>Email Address:</strong></label>
                            <input type="email" id="myEmail" name="email" maxLength="25" />
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
    container: {
        fontFamily: 'Arial, sans-serif',
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    headerContent: {
        flexGrow: '1',
    },
    navLinks: {
        flexGrow: '3',
        textAlign: 'right',
    },
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
