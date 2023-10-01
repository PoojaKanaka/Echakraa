import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UTILITIES } from '../../utilities/utilities';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientComponent {
  patientbenifits = [
    {
      imgURL:
        'https://assets-global.website-files.com/61dc2de9c3225e63b12473b8/625fc42d7a583d42920541fa_Frame.svg',
      title: 'E-health records',
      subTitle: 'Maintain a timeline of your medical history.',
    },
    {
      imgURL:
        'https://assets-global.website-files.com/61dc2de9c3225e63b12473b8/62557f8317bf66e2d1bb4324_Frame.svg',
      title: 'Secured Payments',
      subTitle: 'Schedule appointments with secured payment methods.',
    },
    {
      imgURL:
        'https://assets-global.website-files.com/61dc2de9c3225e63b12473b8/6253e006a585727e7c02eec5_Patient_Icons-49%201.svg',
      title: 'Quality health care',
      subTitle: 'Stay Connected with your doctor',
    },
    {
      imgURL:
        'https://assets-global.website-files.com/61dc2de9c3225e63b12473b8/6253e0205cb70477460ed360_Patient_Icons-50.svg',
      title: 'No location barriers',
      subTitle: 'Book in-clinic or Video Consultation Appointments.',
    },
  ];

  whatWeOffer = [
    {
      question: 'Secured and Private Consultations',
      answer:
        'Docon provides best-in-class platform for patients to connect with their doctors safely',
    },
    {
      question: 'Schedule appointments with your doctor',
      answer:
        'Book appointments with your doctors for in-clinic or video consultations',
    },
    {
      question: 'Share important reports & documents instantly',
      answer:
        'Upload and share reports pre or post consultations from patient app',
    },
    {
      question: 'Get important updates on Whatsapp',
      answer: 'You won’t miss on any important notifications on Whatsapp',
    },
    {
      question: 'Access to all medical records at one place',
      answer:
        'View and keep track of your previous prescriptions right from your phone',
    },
    {
      question: 'Record and self-monitor advised vitals',
      answer:
        'Record important vitals in the patient app and share it with your doctor',
    },
  ];

  howItWorksForYouFirst = [
    {
      imgURL:
        'https://assets-global.website-files.com/61d565f8e34ebb4e5dae2da8/6253e0c0d10a2043c5af98e8_Patient_Icons-44.svg',
      title: 'Find your doctor first',
      subTitle: 'From the Docon Patient App, select your doctor',
    },
    {
      imgURL:
        'https://assets-global.website-files.com/61d565f8e34ebb4e5dae2da8/6253e0f19be0a7587b255a93_Patient_Icons-42.svg',
      title: 'Pick appointment slot',
      subTitle: 'Pick a convenient appointment slot, pay & get confirmation',
    },
    {
      imgURL:
        'https://assets-global.website-files.com/61d565f8e34ebb4e5dae2da8/6253e123dbe97aed10d1c048_Patient_Icons-45.svg',
      title: 'Get reminder before call',
      subTitle: 'Get notification 15 mins before the slot time',
    },
  ];

  howItWorksForYouSecond = [
    {
      imgURL:
        'https://assets-global.website-files.com/61d565f8e34ebb4e5dae2da8/6253e116924abb4b31152e06_Patient_Icons-46.svg',
      title: 'Video consult',
      subTitle: 'Get video call from the doctor for the consultation',
    },
    {
      imgURL:
        'https://assets-global.website-files.com/61d565f8e34ebb4e5dae2da8/6253e140e575711f557e26ba_Patient_Icons-43.svg',
      title: 'Prescription on mobile',
      subTitle: 'Access your digital prescription instantly on the app',
    },
    {
      imgURL: `${UTILITIES.ILLUSTRATION.DEFAULT_URL}${UTILITIES.ILLUSTRATION.TIFIN_SVG}`,
      title: 'Order Tifin',
      subTitle: 'There is always demand for healthy, hygienic and tasty food.',
    },
  ];
}
