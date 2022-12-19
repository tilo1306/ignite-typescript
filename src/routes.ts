import { Request,response,Response } from "express";
import CreateCourseService  from "./CreateCourseService";



export function createCourse(request: Request, Response: Response){
    CreateCourseService.execute({
        name: "NodeJS",
        educator: 'Douglas',
        duration: 10
    })

    return response.send()
}
