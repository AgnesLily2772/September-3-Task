/*
Design database for Zen class programme
users
codekata
attendance
topics
tasks
company_drives
mentors
*/
//Insert data into Collection - users
db.users.insertMany([
{
          username: "agneslily",
          email: "agneslily2772@gmail.com",
          course:"FSD-MERN",
          batch:"34WE"
},
{
          username: "evangeline",
          email: "evangeline3078@gmail.com",
          course:"FSD-MERN",
          batch:"34WE"
},
{
          username: "kani",
          email: "kani1977@gmail.com",
          course:"FSD-MERN",
          batch:"34WE"
},
{
          username: "arun",
          email: "arun1971@gmail.com",
          course:"FSD-MERN",
          batch:"34WE"
}])
//Insert data into Collection - codekata
db.codekata.insertMany([
{
          "module":"module 1",
          "no_of_questions":10,
          "solved":[{"agneslily":7},{"evangeline":5},{"kani":7},{"arun":3}],
          "unsolved":[{"agneslily":3},{"evangeline":5},{"kani":3},{"arun":7}]
},
{
          "module":"module 2",
          "no_of_questions":10,
          "solved":[{"agneslily":3},{"evangeline":5},{"kani":7},{"arun":0}],
          "unsolved":[{"agneslily":7},{"evangeline":5},{"kani":3},{"arun":10}] 
},
{
          "module":"module 3",
          "no_of_questions":10,
          "solved":[{"agneslily":0},{"evangeline":0},{"kani":0},{"arun":0}],
          "unsolved":[{"agneslily":10},{"evangeline":10},{"kani":10},{"arun":10}]
}])
//Insert data into Collection - attendance
db.attendance.insertMany([
{
          "name":"agneslily",
          "classes_conducted":25,
          "classes_attended":23,
          "classes_absent":2,
          "month" :"october"
},
{
          "name":"evangeline",
          "classes_conducted":25,
          "classes_attended":20,
          "classes_absent":5,
          "month" :"october"
},
{
          "name":"kani",
          "classes_conducted":25,
          "classes_attended":19,
          "classes_absent":6,
          "month" :"october"
},
{
          "name":"arun",
          "classes_conducted":25,
          "classes_attended":19,
          "classes_absent":6,
          "month" :"november"
}])
//Insert data into Collection - topics
db.topics.insertMany([
{
          "topic_1":"html",
          "month":"october"
},
{
          "topic_2":"css",
          "month":"october"
},
{
          "topic_3":"javascript",
          "month":"october"
},
{
          "topic_4":"reactjs",
          "month":"november"
},
{
          "topic_5":"mysql",
          "month":"december"
},
{
          "topic_6":"mongodb",
          "month":"december"
},
{
          "topic_7":"nodejs",
          "month":"january"
}])
//Insert data into Collection - tasks
db.tasks.insertMany([
{
          "task_no":1,
          "month":"october",
          "task_submitted":[{"name":"agneslily"},{"name":"evangeline"},{"name":"kani"}],
},
{
          "task_no":2,
          "month":"october",
          "task_submitted":[{"name":"agneslily"},{"name":"evangeline"},{"name":"kani"}]
},
{
          "task_no":3,
          "month":"october",
          "task_submitted":[{"name":"agneslily"},{"name":"evangeline"},{"name":"kani"}]
},
{
          "task_no":4,
          "month":"october",
          "task_submitted":[{"name":"agneslily"},{"name":"evangeline"},{"name":"kani"}]
},
{
          "task_no":5,
          "month":"october",
          "task_submitted":[{"name":"agneslily"},{"name":"evangeline"},{"name":"kani"}]
},
{
          "task_no":6,
          "month":"october",
          "task_submitted":[{"name":"agneslily"},{"name":"evangeline"},{"name":"kani"}]
},
{
          "task_no":7,
          "month":"october",
          "task_submitted":[{"name":"agneslily"},{"name":"evangeline"},{"name":"kani"}]
},
{
          "task_no":8,
          "month":"october",
          "task_submitted":[{"name":"evangeline"},{"name":"kani"}]
},
{
          "task_no":9,
          "month":"october",
          "task_submitted":[{"name":"evangeline"},{"name":"kani"}]
},
{
          "task_no":10,
          "month":"october",
          "task_submitted":[{"name":"evangeline"}]
},
{
          "task_no":11,
          "month":"november",
          "task_submitted":[{"name":"rajesh"}]
}])
//Insert data into Collection - company_drives
db.company_drives.insertMany([
{
          "company":"google",
          "date":"14 oct-2020 ",
          "students_attended":[{"name":"agneslily"},{"name":"evangeline"},{"name":"kani"}]
},
{
          "company":"microsoft",
          "date":"15 oct-2020 ",
          "students_attended":[{"name":"agneslily"},{"name":"evangeline"}]
},
{
          "company":"amazon",
          "date":"16 oct-2020 ",
          "students_attended":[{"name":"kani"},{"name":"evangeline"}]
},
{
          "company":"guvi",
          "date":"17 oct-2020 ",
          "students_attended":[{"name":"evangeline"}]
}])
//Insert data into Collection - mentors
db.mentors.insertMany([
{
          "mentor_name":"aakash",
          "batches":[35,36],
          "mentee_count":45
},
{
          "mentor_name":"karthik",
          "batches":[34,35],
          "mentee_count":45
},
{
          "mentor_name":"nagaraj",
          "batches":[36,37],
          "mentee_count":45
},
{
          "mentor_name":"deepak",
          "batches":[30],
          "mentee_count":10
}])
//1. Find all the topics and tasks which are thought in the month of October
db.topics.find({"month":"october"});
/*
==>Output
{
          _id: ObjectId("64f4c5863c42cf4cd0786517"),
          topic_1: 'html',
          month: 'october'
 }
{
          _id: ObjectId("64f4c5863c42cf4cd0786518"),
          topic_2: 'css',
          month: 'october'
}
{
          _id: ObjectId("64f4c5863c42cf4cd0786519"),
          topic_3: 'javascript',
          month: 'october'
}
*/
db.tasks.find({ "month":"october"});
/*
==>Output
{
          _id: ObjectId("64f4c6f13c42cf4cd078651e"),
          task_no: 1,
          month: 'october',
          task_submitted: [{
                    name: 'agneslily'
          },
          {
                    name: 'evangeline'
          },
          {
                    name: 'kani'
          }]
}
{
          _id: ObjectId("64f4c6f13c42cf4cd078651f"),
          task_no: 2,
          month: 'october',
          task_submitted: [{
                    name: 'agneslily'
          },
          {
                    name: 'evangeline'
          },
          {
                    name: 'kani'
          }]
}
{
          _id: ObjectId("64f4c6f13c42cf4cd0786520"),
          task_no: 3,
          month: 'october',
          task_submitted: [{
                    name: 'agneslily'
          },
          {
                    name: 'evangeline'
          },
          {
                    name: 'kani'
          }]
}
{
          _id: ObjectId("64f4c6f13c42cf4cd0786521"),
          task_no: 4,
          month: 'october',
          task_submitted: [{
                    name: 'agneslily'
          },
          {
                    name: 'evangeline'
          },
          {
                    name: 'kani'
          }]
}
{
          _id: ObjectId("64f4c6f13c42cf4cd0786522"),
          task_no: 5,
          month: 'october',
          task_submitted: [{
                    name: 'agneslily'
          },
          {
                    name: 'evangeline'
          },
          {
                    name: 'kani'
          }]
}
{
          _id: ObjectId("64f4c6f13c42cf4cd0786523"),
          task_no: 6,
          month: 'october',
          task_submitted: [{
                    name: 'agneslily'
          },
          {
                    name: 'evangeline'
          },
          {
                    name: 'kani'
          }]
}
{
          _id: ObjectId("64f4c6f13c42cf4cd0786524"),
          task_no: 7,
          month: 'october',
          task_submitted: [{
                    name: 'agneslily'
          },
          {
                    name: 'evangeline'
          },
          {
                    name: 'kani'
          }]
}
{
          _id: ObjectId("64f4c6f13c42cf4cd0786525"),
          task_no: 8,
          month: 'october',
          task_submitted: [{
                    name: 'evangeline'
          },
          {
                    name: 'kani'
          }]
}
{
          _id: ObjectId("64f4c6f13c42cf4cd0786526"),
          task_no: 9,
          month: 'october',
          task_submitted: [{
                    name: 'evangeline'
          },
          {
                    name: 'kani'
          }]
}
{
          _id: ObjectId("64f4c6f13c42cf4cd0786527"),
          task_no: 10,
          month: 'october',
          task_submitted: [{
                    name: 'evangeline'
          }]
}
*/
//2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.company_drives.find({ "date":{$gt:"15 oct-2020 ",$lt:"30 oct-2020"}})
/*
==>Output
{
          _id: ObjectId("64f4c7053c42cf4cd078652b"),
          company: 'amazon',
          date: '16 oct-2020 ',
          students_attended: [{
                    name: 'kani'
          },
          {
                    name: 'evangeline'
          }]
}
{
          _id: ObjectId("64f4c7053c42cf4cd078652c"),
          company: 'guvi',
          date: '17 oct-2020 ',
          students_attended: [{
                    name: 'evangeline'
          }]
}
*/  
//3. Find all the company drives and students who are appeared for the placement.
db.company_drives.find({},{students_attended:1})
/*
==>Output
{
          _id: ObjectId("64f4c7053c42cf4cd0786529"),
          students_attended: [{
                    name: 'agneslily'
          },
          {
                    name: 'evangeline'
          },
          {
                    name: 'kani'
          }]
}
{
          _id: ObjectId("64f4c7053c42cf4cd078652a"),
          students_attended: [{
                    name: 'agneslily'
          },
          {
                    name: 'evangeline'
          }]
}
{
          _id: ObjectId("64f4c7053c42cf4cd078652b"),
          students_attended: [{
                    name: 'kani'
          },
          {
                    name: 'evangeline'
          }]
}
{
          _id: ObjectId("64f4c7053c42cf4cd078652c"),
          students_attended: [{
                    name: 'evangeline'
          }]
}
 */
//3. Find the number of problems solved by the user in codekata
db.codekata.find({},{solved:1})
/*
==>Output
{
          _id: ObjectId("64f4c3fc3c42cf4cd0786514"),
          solved: [{
                    agneslily: 7
          },
          {
                    evangeline: 5
          },
          {
                    kani: 7
          },
          {
                    arun: 3
          }]
}
{
  _id: ObjectId("64f4c3fc3c42cf4cd0786515"),
  solved: [{
                    agneslily: 3
          },
          {
                    evangeline: 5
          },
          {
                    kani: 7
          },
          {
                    arun: 0
          }]
}
{
  _id: ObjectId("64f4c3fc3c42cf4cd0786516"),
  solved: [{
                    agneslily: 0
          },
          {
                    evangeline: 0
          },
          {
                    kani: 0
          },
          {
                    arun: 0
          }]
}
 */
//5. Find all the mentors with who has the mentee's count more than 15
db.mentors.find({ "mentee_count":{$gt:15}})
/*
==>Output
{
          _id: ObjectId("64f4c7a33c42cf4cd078652d"),
          mentor_name: 'aakash',
          batches: [ 35, 36 ],
          mentee_count: 45
}
{
          _id: ObjectId("64f4c7a33c42cf4cd078652e"),
          mentor_name: 'karthik',
          batches: [ 34, 35 ],
          mentee_count: 45
}
{
          _id: ObjectId("64f4c7a33c42cf4cd078652f"),
          mentor_name: 'nagaraj',
          batches: [ 36, 37 ],
          mentee_count: 45
}
*/
//6. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.attendance.find({},{"classes_absent":1,"name":1, "month" :"october"})
/*
==>Output
{
  _id: ObjectId("64f4cc063c42cf4cd0786531"),
  name: 'agneslily',
  classes_absent: 2,
  month: 'october'
}
{
  _id: ObjectId("64f4cc063c42cf4cd0786532"),
  name: 'evangeline',
  classes_absent: 5,
  month: 'october'
}
{
  _id: ObjectId("64f4cc063c42cf4cd0786533"),
  name: 'kani',
  classes_absent: 6,
  month: 'october'
}
{
  _id: ObjectId("64f4cc063c42cf4cd0786534"),
  name: 'arun',
  classes_absent: 6,
  month: 'october'
}
 */