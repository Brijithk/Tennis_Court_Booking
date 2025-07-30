import styles from "../css/CreatePassword.module.css";
import { useState } from "react";

function CreatePassword() {

    const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Password created successfully!");
    }
  };
    return (
       <div className={styles.mainContainer}>
          <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
');`}
      </style>
      <div className={styles.createPasswordContainer}>
        <div className={styles.innerContainer}>
           
            <div className={styles.HeadingContainer}>
           <h1 className={styles.createHeading}>Create Password</h1>
           </div>
           <div className={styles.bottomSection}>
          <div className={styles.leftSection}>
        
         <div className={styles.boxItems}>
 <input type="password" className={styles.passwordInput}
   placeholder="Enter new password" onChange={(e) => setPassword(e.target.value) }required/>
<input type="password" className={styles.passwordInput}
 placeholder="Confirm password"  onChange={(e) => setConfirmPassword(e.target.value) }required/>
 <button className={styles.createButton} onClick={handleSubmit}>Create</button>
 </div>
 
  </div>
      <div className={styles.rightSection}>
        <img src="/images/newPassword.png" alt="Create Password" className={styles.createImage} />
      </div>
      </div>
    </div>
    </div>
    </div>
    );
}
export default CreatePassword;
// 8/6/2025