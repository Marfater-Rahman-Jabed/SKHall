const {Schema,mongoose}=require('mongoose');

const roomSchema=new Schema({
    title:{
        type:String,
    },
    number:{
        type:String,
    },
    type:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'RoomType'
    }
});

let Room;
try {
    // If the model is already defined, retrieve it
    Room = mongoose.model('Room');
  }
    catch {
        // If the model is not defined, create it
        Room = mongoose.model('Room', roomSchema);
    }

export default Room;