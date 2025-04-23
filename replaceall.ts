type ReplaceAll<T extends string, P extends string, U extends string> = T extends `${infer A}${P}${infer B}` ? ReplaceAll<`${A}${U}${B}`,P, U>: T


type A = ReplaceAll<"aa-bb-cc", "-", "_">; // "aa_bb_cc"


