import { Bootcamp } from 'src/bootcamps/entities/bootcamp.entity';
import { minimumSkil } from './../enum/minimum.skill.enum';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity('courses')
export class Course {

    @PrimaryGeneratedColumn()
    id: number

    
    title: string

    @Column({
        type: 'integer'

    }
    )

    
    description: string

    @Column({
        type: 'integer'

    }
    )

    
    weeks:  number

    @Column({
        type: 'integer'

    }
    )

    
    tution:  number

    @Column({
        type: 'integer'

    }
    )

    @Column({
        type: 'enum',
        enum: [ 'Beginner',
                'Intermediate',
                'Advanced'
        ]
    })

    minimumSkil: minimumSkil

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    }
    )
    createAt: Date

    @ManyToOne(()=> Bootcamp,
    (bootcamp: Bootcamp) =>
        bootcamp.courses
            )
bootcamp: Bootcamp


}


