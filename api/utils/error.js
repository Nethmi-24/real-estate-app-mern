//for custome made errors
export const errorHandler=(statusCode,message)=>{
const error=new Error(); //js constructor to create an error
error.statusCode=statusCode // =statusCode is what we pass as a parameter here. It is assigned to error.Statuscode
error.message=message
return error;
}