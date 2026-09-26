import { EducationItem, AchievementItem } from '../../../domain/entities/education.entity';

export const rawEducationData: EducationItem[] = [
  {
    id: 'widyatama',
    institution: 'Widyatama University',
    degree: 'Bachelor Degree (S.Kom)',
    major: 'Computer Science / Informatics Engineering',
    period: '2020 - Present',
    gpa: '3.5 / 4.00',
    description: 'Focusing on distributed software architectures, mobile computing, algorithms, and human-computer interaction.',
    isFormalDegree: true,
  },
  {
    id: 'smkn1-cimahi',
    institution: 'SMK Negeri 1 Cimahi',
    degree: 'Vocational High School (4 Years Program)',
    major: 'Software Engineering (RPL - Rekayasa Perangkat Lunak)',
    period: '2015 - 2019',
    description: 'Rigorous 4-year technical vocational curriculum equivalent to Associate Degree (D1), establishing strong foundations in OOP, Java, Android development, database design, and web technologies.',
    isFormalDegree: true,
  },
];

export const rawAchievementsData: AchievementItem[] = [
  {
    id: 'unpad-hiscope-2017',
    title: 'HI-Scope Web Developer Competition',
    issuer: 'Universitas Padjadjaran (UNPAD)',
    year: '2017',
    description: 'Recognized for algorithmic problem solving and rapid product engineering in competitive hackathon environment.',
  },
  {
    id: 'telematics-fellowship-2018',
    title: 'Telematics & Mobile Incubation Fellowship',
    issuer: 'Inkubasi Animasi & Telematika Cimahi',
    year: '2018 - 2019',
    description: 'Awarded fellowship for advanced mobile engineering and telematics innovation.',
  },
];
