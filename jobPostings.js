const mongoose = require('mongoose');

let Job

const JobSchema = new mongoose.Schema({
	jobType: "String",
	title: "String",
	company: "String",
	location: "String",
	postingDate: "String",
	experience: "String",
	salary: "String"
});

JobSchema.virtual(" Job ").get(function(){
	return `${this.title} ${this.company} 
			${this.location} ${this.experience} 
			${this.salary} ${this.postingDate}`
})

Job = mongoose.model('job', JobSchema);


module.exports = Job;