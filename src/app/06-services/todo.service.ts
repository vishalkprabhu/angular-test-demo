import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export class TodoService {
  constructor(private http: HttpClient) {}

  add(todo) {
    return this.http.post("...", todo).pipe(map((res: Response) => res.json()));
  }

  getTodos() {
    return this.http.get("...").pipe(map((res: Response) => res.json()));
  }

  delete(id) {
    return this.http.delete("...").pipe(map((res: Response) => res.json()));
  }
}
