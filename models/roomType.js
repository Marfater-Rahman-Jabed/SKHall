const {Schema,mongoose}=require('mongoose');

const roomTypeSchema=new Schema({
    title:{
        type:String,
    },
    seats:{
        type:Array,
    },
    type:{
        type:String,
    }
});

let RoomType;
try {
    // If the model is already defined, retrieve it
    RoomType = mongoose.model('RoomType');
  }
    catch {
        // If the model is not defined, create it
        RoomType = mongoose.model('RoomType', roomTypeSchema);
    }

export default RoomType;