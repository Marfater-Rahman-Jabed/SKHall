import  {mongoose,Schema} from "mongoose";

const studentSchema = new Schema({
    name: {
        type: String,
    },
    department: {
        type: String,
    },
    session: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    batch: {
        type: String,
    },
    registrationNo: {
        type: String,
    },
    dob: {
        type: Date,
    },


});
let Student;
try {
    // If the model is already defined, retrieve it
    Student = mongoose.model('Student');
  } catch {
    // If the model is not defined, create it
    Student = mongoose.model('Student', studentSchema);
  }

export default Student; 