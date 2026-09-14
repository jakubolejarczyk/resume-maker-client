import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";

interface Test {
    isTest: boolean
}

export class SetCompanies {
  static readonly type = '[Company] Set Companies';
}


@State<Test>({
  name: 'testState',
  defaults: {
    isTest: true
  }
})
@Injectable({ providedIn: 'root' })
export class TestState {
    @Action(SetCompanies)
    setCompanies(context: StateContext<Test>) {
        const state = context.getState();
        context.setState({
            ...state,
            isTest: !state.isTest
        });
    }
}