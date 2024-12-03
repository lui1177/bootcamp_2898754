import { Course } from './../../courses/entities/course.entity';
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity('bootcamps')

export class Bootcamp {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'varchar',
        length: 30
    })

    
    name: string

    @Column({
        type: 'integer'

    }
    )
    phone: string

    @Column({
        type: 'text'
    }
    )
    address: string

    @Column({
        type: 'integer'
    }
    )
    topics: string


    @Column({
        type: 'double'
    }
    )
    averageRating: number
    
    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    }
    )
    createAt: Date

    @OneToMany(() => Course , 
                    (course) => course.bootcamp)   
        courses: Course []
}
