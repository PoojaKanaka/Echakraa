import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UTILITIES } from '../utilities/utilities';

@Component({
  selector: 'app-end-user-portal',
  templateUrl: './end-user-portal.component.html',
  styleUrls: ['./end-user-portal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EndUserPortalComponent {
  VIDEO_CALL_ILLUSTRATION_URL = `${UTILITIES.ILLUSTRATION.DEFAULT_URL}${UTILITIES.ILLUSTRATION.VIDEO_CALL_SVG}`;
  SYNC_SVG_ILLUSTRATION_URL = `${UTILITIES.ILLUSTRATION.DEFAULT_URL}${UTILITIES.ILLUSTRATION.SYNC_SVG}`;

  features = [
    {
      imgURL: `${UTILITIES.ILLUSTRATION.DEFAULT_URL}${UTILITIES.ILLUSTRATION.VIDEO_CALL_SVG}`,
      title: 'Instant Video Consultation',
    },
    {
      imgURL: `${UTILITIES.ILLUSTRATION.DEFAULT_URL}${UTILITIES.ILLUSTRATION.FIND_DOCTOR}`,
      title: 'Find Doctors Near You',
    },
    {
      imgURL: `${UTILITIES.ILLUSTRATION.DEFAULT_URL}${UTILITIES.ILLUSTRATION.NO_DATA_SVG}`,
      title: 'Medicines',
    },
    {
      imgURL: `${UTILITIES.ILLUSTRATION.DEFAULT_URL}${UTILITIES.ILLUSTRATION.LAB_TEST_SVG}`,
      title: 'Labe Test',
    },
    {
      imgURL: `${UTILITIES.ILLUSTRATION.DEFAULT_URL}${UTILITIES.ILLUSTRATION.NO_DATA_SVG}`,
      title: 'Surgeries',
    },
    {
      imgURL: `${UTILITIES.ILLUSTRATION.DEFAULT_URL}${UTILITIES.ILLUSTRATION.CAR_BOOKING_SVG}`,
      title: 'Automatic Cab Booking',
    },
  ];

  doctorServices = [
    {
      iconName: 'home_health',
      title: 'The Clinic management system ',
      subTitle:
        'The Healthray software for hospitals helps to have quick access to all the information.',
    },
    {
      iconName: 'wysiwyg',
      title: 'The E prescribing software for Doctor',
      subTitle:
        'The Healthray App gives the facility for doctors a special privilege to get an easy health care report.',
    },
    {
      iconName: 'wysiwyg',
      title: 'The Digital transformation of healthcare',
      subTitle:
        'The Healthray facility has made it easier to access health care for the patients as well as the doctors.',
    },
    {
      iconName: 'recent_actors',
      title: 'The Reception Management',
      subTitle:
        'The Healthray App facility helps to keep all the records, queries, and follow-ups at your fingertips.',
    },
    {
      iconName: 'admin_meds',
      title: 'The OPD Management Service',
      subTitle:
        'The Healthray App makes it simple to manage all of your OPDs in the easiest way.',
    },
    {
      iconName: 'personal_injury',
      title: 'The Doctor/patient management software',
      subTitle:
        'The Healthray App helps in staff management and keeping track of available doctor.',
    },
    {
      iconName: 'receipt_long',
      title: 'The Software for hospital billing',
      subTitle:
        'The Healthray App helps patients to arrange billing as well as hospital expenses.',
    },
    {
      iconName: 'summarize',
      title: 'The Discharge Summary of Patient',
      subTitle:
        'The Healthray App gives a discharge summary of each patient and is also easily accessible.',
    },
  ];
}
