/**
 * סוגי חלקים של מילות שיר
 */
export enum LyricsType {
    VERSE = 'verse',
    CHORUS = 'chorus',
    BRIDGE = 'bridge',
    INTRO = 'intro',
    OUTRO = 'outro'
}

/**
 * מייצג שורה או חלק במילות שיר
 */
export type Lyrics = {
    /** סוג החלק במילות השיר */
    type: LyricsType | string;
    /** תוכן השורה או החלק */
    content: {
        /** תרגום לעברית */
        hebrew: string;
        /** תעתיק לאותיות עבריות */
        transcription: string;
        /** טקסט המקור באנגלית */
        english: string;
    }
};

/**
 * מייצג אמן או להקה
 */
export type Artist = {
    /** שם האמן או הלהקה */
    name: string;
    /** מידע נוסף על האמן (אופציונלי) */
    info?: string;
};

/**
 * מייצג אלבום מוזיקלי
 */
export type Album = {
    /** שם האלבום */
    title: string;
    /** שנת הוצאה */
    year?: number;
    /** רשימת שירים באלבום */
    songs?: Song[];
};

/**
 * מייצג שיר מלא
 */
export type Song = {
    /** כותרת השיר */
    title: string;
    /** האמן או הלהקה */
    artist: string | Artist;
    /** קישור לסרטון יוטיוב */
    'youtube-link'?: string;
    /** שנת יציאה (אופציונלי) */
    year?: number;
    /** אלבום (אופציונלי) */
    // album?: string | Album;
    /** משך השיר בשניות (אופציונלי) */
    // duration?: number;
    /** מילות השיר */
    lyrics: Lyrics[];
    /** תגיות נוספות (אופציונלי) */
    // tags?: string[];
};

/**
 * דוגמה לשיר
 */
export const aniMaminSong: Song = {
    title: 'אני מאמין',
    artist: 'טאי גרוזברג',
    lyrics: [
        {
            type: LyricsType.VERSE,
            content: {
                hebrew: 'הם אומרים לי שאני נאחז במשהו שכבר מזמן נעלם',
                transcription: 'דֵי טֶל מִי דֶט אַי\'ם הוֹלְדִינְג אוֹן טוּ סַמְתִ\'ינְג דֶט אִיז לוֹנְג גוֹן',
                english: 'They tell me that I\'m holding on to something that is long gone'
            }
        },
        {
            type: LyricsType.VERSE,
            content: {
                hebrew: 'נעלם מזמן',
                transcription: 'לוֹנְג גוֹן',
                english: 'Long gone'
            }
        }
    ]
};



type SongItem = {
    name: string;
    artist: string;
    'youtube-link': string;
    page: string;
};

type SongsList = SongItem[];