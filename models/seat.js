import  {mongoose,Schema} from "mongoose";

const seatSchema = new Schema({
    name: {
        type: String,
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
    joinningDate: {
        type: Date,
        default: Date.now,
    },
    expiredDate: {
        type:Date,
        default:Date.now,
    },
    status: {
        type: String,
    },
    


});
let Seat;
try {
    // If the model is already defined, retrieve it
    Seat = mongoose.model('Seat');
  } catch {
    // If the model is not defined, create it
    Seat = mongoose.model('Seat', seatSchema);
  }

export default Seat; 