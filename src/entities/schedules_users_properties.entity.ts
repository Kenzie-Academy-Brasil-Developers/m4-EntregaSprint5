import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Property } from "./properties.entity";
import { User } from "./user.entity";

@Entity("schedules_users_properties")
class Schedule {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => User, (user) => user.schedule)
  user: User;

  @ManyToOne(() => Property, (property) => property.schedule)
  property: Property;
}

export { Schedule };
