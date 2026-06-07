import {
    useEffect,
    useState
} from "react";

import {

    getProfile,

    updateProfile

} from "../services/profileService";

import type {
    ProfileResponse
} from "../types/profile.types";

import {
    successToast,
    errorToast
} from "../../../shared/utils/toast";

let cachedProfile: ProfileResponse | null = null;
let cachedError = "";
let fetchPromise: Promise<ProfileResponse> | null = null;
let hasLoadedOnce = false;

export function useProfile() {

    const [profile, setProfile] =
        useState<ProfileResponse | null>(cachedProfile);

    const [loading, setLoading] =
        useState(!hasLoadedOnce);

    const loadProfile =
        async () => {

            if (fetchPromise) {
                try {
                    const data = await fetchPromise;
                    await new Promise((resolve) => setTimeout(resolve, 800));
                    setProfile(data);
                    setLoading(false);
                } catch (err) {
                    // Handled by original promise
                }
                return;
            }

            try {
                if (!hasLoadedOnce) {
                    setLoading(true);
                }

                fetchPromise = getProfile();
                const data = await fetchPromise;

                await new Promise((resolve) => setTimeout(resolve, 800));

                cachedProfile = data;
                setProfile(data);
                hasLoadedOnce = true;

            } catch (err) {
                const message = err instanceof Error ? err.message : "Failed to load profile";
                cachedError = message;
            } finally {

                setLoading(false);
                fetchPromise = null;

            }

        };

    const saveProfile =
        async () => {

            if (!profile)
                return;

            if (!profile.name.trim()) {

                errorToast(
                    "Name is required"
                );

                return;

            }

            if (!profile.phone.trim()) {

                errorToast(
                    "Phone is required"
                );

                return;

            }

            if (
                !/^\d{10}$/.test(
                    profile.phone
                )
            ) {

                errorToast(
                    "Phone must contain 10 digits"
                );

                return;

            }

            if (!profile.address.trim()) {

                errorToast(
                    "Address is required"
                );

                return;

            }

            try {

                const response =
                    await updateProfile({

                        name:
                            profile.name,

                        phone:
                            profile.phone,

                        address:
                            profile.address

                    });

                setProfile(
                    response.client
                );

                successToast(
                    "Profile updated"
                );

            } catch {

                errorToast(
                    "Failed to update profile"
                );

            }

        };

    useEffect(() => {

        loadProfile();

    }, []);

    return {

        profile,

        setProfile,

        loading,

        saveProfile

    };

}