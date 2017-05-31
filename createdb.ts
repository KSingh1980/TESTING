import {database, initializeApp} from "firebase";
import {firebaseConfig} from "./firebase.config";
import {resData} from "./rescloud";


console.log('Initizalizing Firebase database ... ');

initializeApp(firebaseConfig);


const resCloudRef = database().ref('restaurantsconfig');
const restaurantTypeConfig = database().ref('restauranttypes');




resData.restaurants.forEach( restaurantConfig => {

  console.log('adding restaurants', restaurantConfig.url);

  const restObject = resCloudRef.push({
      url: restaurantConfig.url,
      description: restaurantConfig.description,
      iconUrl: restaurantConfig.iconUrl
   
  });

  let menutTypesPerRestaurant = [];

  resCloudRef[0].menutype.forEach((menuType:any) =>  {

    console.log('adding menuType ', menuType.url);

    menutTypesPerRestaurant.push(lessonsRef.push({
        description: lesson.description,
        duration: lesson.duration,
        url: lesson.url,
        tags: lesson.tags,
        videoUrl: lesson.videoUrl || null,
        longDescription: lesson.longDescription,
        courseId: courseRef.key
      }).key);

  });


  const association = database().ref('menutypeperrestaurant');

  const lessonsPerCourse = association.child(courseRef.key);

  lessonKeysPerCourse.forEach(lessonKey => {
    console.log('adding lesson to course ');

    const lessonCourseAssociation = lessonsPerCourse.child(lessonKey);

    lessonCourseAssociation.set(true);
  });


});
