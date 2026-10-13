import { Action, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { UserStoreDatabaseMockModel } from "../model/user-store-database-mock.model";
import { UserStoreDatabaseMockAction } from "../action/user-store-database-mock.action";

@State<UserStoreDatabaseMockModel>({
  name: "userStoreDatabaseMockState",
  defaults: [
    {
      id: 0,
      order: 0,
      firstName: "Jakub",
      lastName: "Olejarczyk",
      jobTitle: "Senior Software Engineer",
      phoneNumber: "+48 501 007 197",
      email: "jakub.olejarczyk@outlook.com",
      city: "Kielce",
      country: "Poland",
      links: [
        "olejarczykjakub.com",
        "linkedin.com/in/jakub-olejarczyk",
        "github.com/jakubolejarczyk",
        "leetcode.com/u/JakubOlejarczyk"
      ],
      summary: "Senior Software Engineer with 6+ years of experience in full-stack web development, specializing in Angular on the frontend and ASP.NET on the backend. Experienced in designing and developing scalable web applications, RESTful APIs, and backend services, with a strong focus on clean architecture, performance, maintainability, and code quality. Proven ability to contribute across the full software development lifecycle and collaborate effectively with cross-functional teams to deliver scalable and maintainable solutions."
    }
  ]
})
@Injectable({ providedIn: "root" })
export class UserStoreDatabaseMockState {
  @Action(UserStoreDatabaseMockAction.Delete)
  delete(context: StateContext<UserStoreDatabaseMockModel>, action: UserStoreDatabaseMockAction.Delete) {
    const state = context.getState();
    const newState = state.filter(user => user.id !== action.id);
    context.setState(newState);
  }
}