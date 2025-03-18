// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Workspace configuration.
 *
 * This is a singleton resource. You must only create one frontegg.Workspace resource
 * per Frontegg provider.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as frontegg from "@pulumi/frontegg";
 *
 * const example = new frontegg.Workspace("example", {
 *     name: "Your Company",
 *     country: "US",
 *     backendStack: "Python",
 *     frontendStack: "React",
 *     openSaasInstalled: false,
 *     fronteggDomain: "blah.frontegg.com",
 *     allowedOrigins: ["https://yourcompany.com"],
 *     authPolicy: {
 *         allowUnverifiedUsers: true,
 *         allowSignups: true,
 *         enableApiTokens: true,
 *         enableRoles: true,
 *         jwtAlgorithm: "RS256",
 *         machineToMachineAuthStrategy: "ClientCredentials",
 *         jwtAccessTokenExpiration: 86400,
 *         jwtRefreshTokenExpiration: 2592000,
 *         sameSiteCookiePolicy: "strict",
 *         authStrategy: "EmailAndPassword",
 *         allowTenantInvitations: true,
 *     },
 *     mfaPolicy: {
 *         allowRememberDevice: true,
 *         deviceExpiration: 604800,
 *         enforce: "unless-saml",
 *     },
 *     mfaAuthenticationApp: {
 *         serviceName: "Your Company",
 *     },
 *     lockoutPolicy: {
 *         maxAttempts: 10,
 *     },
 *     passwordPolicy: {
 *         allowPassphrases: false,
 *         minLength: 10,
 *         maxLength: 128,
 *         minTests: 2,
 *         minPhraseLength: 6,
 *         history: 2,
 *     },
 *     captchaPolicy: {
 *         siteKey: "fake-site-key",
 *         secretKey: "fake-secret-key",
 *         minScore: 0.5,
 *     },
 *     hostedLogin: {
 *         allowedRedirectUrls: [
 *             "http://example.com/a",
 *             "http://example.com/b",
 *         ],
 *     },
 *     facebookSocialLogin: {
 *         clientId: "fake-client-id",
 *         redirectUrl: "fake-redirect-url",
 *         secret: "fake-secret",
 *         customised: false,
 *     },
 *     githubSocialLogin: {
 *         clientId: "fake-client-id",
 *         redirectUrl: "fake-redirect-url",
 *         secret: "fake-secret",
 *         customised: false,
 *     },
 *     googleSocialLogin: {
 *         clientId: "fake-client-id",
 *         redirectUrl: "fake-redirect-url",
 *         secret: "fake-secret",
 *         customised: false,
 *     },
 *     microsoftSocialLogin: {
 *         clientId: "fake-client-id",
 *         redirectUrl: "fake-redirect-url",
 *         secret: "fake-secret",
 *         customised: false,
 *     },
 *     saml: {
 *         acsUrl: "https://mycompany.com/saml",
 *         spEntityId: "my-company",
 *         redirectUrl: "http://localhost:3000",
 *     },
 *     oidc: {
 *         redirectUrl: "http://localhost:3000",
 *     },
 *     resetPasswordEmail: {
 *         fromAddress: "me@company.com",
 *         fromName: "Your Company",
 *         subject: "Reset Your Company Password",
 *         htmlTemplate: "<strong>Reset your password! {{redirectURL}}</strong>",
 *         redirectUrl: "https://yourcompany.com/reset",
 *     },
 *     adminPortal: {
 *         enableAccountSettings: false,
 *         enableApiTokens: false,
 *         enableAuditLogs: false,
 *         enablePersonalApiTokens: false,
 *         enablePrivacy: false,
 *         enableProfile: false,
 *         enableRoles: false,
 *         enableSecurity: false,
 *         enableSso: false,
 *         enableSubscriptions: false,
 *         enableUsage: false,
 *         enableUsers: false,
 *         enableWebhooks: false,
 *         enableGroups: false,
 *         enableProvisioning: false,
 *         palette: {
 *             errors: [{
 *                 contrastText: "#eeeef0",
 *                 dark: "#ae402c",
 *                 light: "#FFEEEA",
 *                 main: "#E1583E",
 *             }],
 *             infos: [{
 *                 contrastText: "#eeeef0",
 *                 dark: "#3c6492",
 *                 light: "#E2EEF9",
 *                 main: "#5587C0",
 *             }],
 *             primaries: [{
 *                 active: "#278854",
 *                 contrastText: "#eeeef0",
 *                 dark: "#36A76A",
 *                 hover: "#32A265",
 *                 light: "#A2E1BF",
 *                 main: "#43BB7A",
 *             }],
 *             secondaries: [{
 *                 active: "#E6ECF4",
 *                 contrastText: "#eeeef0",
 *                 dark: "#E6ECF4",
 *                 hover: "#F0F3F8",
 *                 light: "#FBFBFC",
 *                 main: "#FBFBFC",
 *             }],
 *             successes: [{
 *                 contrastText: "#eeeef0",
 *                 dark: "#1d7c30",
 *                 light: "#E1F5E2",
 *                 main: "#2CA744",
 *             }],
 *             warnings: [{
 *                 contrastText: "#eeeef0",
 *                 dark: "#EAE1C2",
 *                 light: "#F9F4E2",
 *                 main: "#A79D7B",
 *             }],
 *         },
 *     },
 * });
 * ```
 */
export class Workspace extends pulumi.CustomResource {
    /**
     * Get an existing Workspace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkspaceState, opts?: pulumi.CustomResourceOptions): Workspace {
        return new Workspace(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'frontegg:index/workspace:Workspace';

    /**
     * Returns true if the given object is an instance of Workspace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Workspace {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Workspace.__pulumiType;
    }

    /**
     * Configures the admin portal.
     */
    public readonly adminPortal!: pulumi.Output<outputs.WorkspaceAdminPortal>;
    /**
     * The origins that are allowed to access the workspace. This parameter controls the value of the "Origin" header for API
     * responses.
     */
    public readonly allowedOrigins!: pulumi.Output<string[]>;
    /**
     * Configures the general authentication policy.
     */
    public readonly authPolicy!: pulumi.Output<outputs.WorkspaceAuthPolicy>;
    /**
     * The backend stack of the application associated with the workspace.
     */
    public readonly backendStack!: pulumi.Output<string>;
    /**
     * Configures the bot detection email.
     */
    public readonly botDetectionEmail!: pulumi.Output<outputs.WorkspaceBotDetectionEmail | undefined>;
    /**
     * Configures the brute force protection email.
     */
    public readonly bruteForceProtectionEmail!: pulumi.Output<outputs.WorkspaceBruteForceProtectionEmail | undefined>;
    /**
     * Configures the bulk tenants invite email.
     */
    public readonly bulkTenantsInvitesEmail!: pulumi.Output<outputs.WorkspaceBulkTenantsInvitesEmail | undefined>;
    /**
     * Configures the CAPTCHA policy in the signup form.
     */
    public readonly captchaPolicy!: pulumi.Output<outputs.WorkspaceCaptchaPolicy | undefined>;
    /**
     * The country associated with the workspace.
     */
    public readonly country!: pulumi.Output<string>;
    /**
     * List of custom domains at which Frontegg services will be reachable. You must configure CNAME for each domain, you can
     * get record values from the portal.
     */
    public readonly customDomains!: pulumi.Output<string[] | undefined>;
    /**
     * Configures the verification email.
     */
    public readonly emailVerificationEmail!: pulumi.Output<outputs.WorkspaceEmailVerificationEmail | undefined>;
    /**
     * Configures social login with Facebook.
     */
    public readonly facebookSocialLogin!: pulumi.Output<outputs.WorkspaceFacebookSocialLogin | undefined>;
    /**
     * The domain at which the Frontegg API is served for this workspace. The domain must end with ".frontegg.com" or
     * ".us.frontegg.com".
     */
    public readonly fronteggDomain!: pulumi.Output<string>;
    /**
     * The frontend stack of the application associated with the worksapce.
     */
    public readonly frontendStack!: pulumi.Output<string>;
    /**
     * Configures social login with GitHub.
     */
    public readonly githubSocialLogin!: pulumi.Output<outputs.WorkspaceGithubSocialLogin | undefined>;
    /**
     * Configures social login with Google.
     */
    public readonly googleSocialLogin!: pulumi.Output<outputs.WorkspaceGoogleSocialLogin | undefined>;
    /**
     * Configures Frontegg-hosted OAuth login.
     */
    public readonly hostedLogin!: pulumi.Output<outputs.WorkspaceHostedLogin | undefined>;
    /**
     * Configures the impossible travel email.
     */
    public readonly impossibleTravelEmail!: pulumi.Output<outputs.WorkspaceImpossibleTravelEmail | undefined>;
    /**
     * Configures the user lockout policy.
     */
    public readonly lockoutPolicy!: pulumi.Output<outputs.WorkspaceLockoutPolicy | undefined>;
    /**
     * Configures the one time code email.
     */
    public readonly magicCodeEmail!: pulumi.Output<outputs.WorkspaceMagicCodeEmail | undefined>;
    /**
     * Configures the magic link email.
     */
    public readonly magicLinkEmail!: pulumi.Output<outputs.WorkspaceMagicLinkEmail | undefined>;
    /**
     * Configures the multi-factor authentication (MFA) via an authentication app.
     */
    public readonly mfaAuthenticationApp!: pulumi.Output<outputs.WorkspaceMfaAuthenticationApp | undefined>;
    /**
     * Configures the MFA enroll email.
     */
    public readonly mfaEnrollEmail!: pulumi.Output<outputs.WorkspaceMfaEnrollEmail | undefined>;
    /**
     * Configures the account challenge with code email.
     */
    public readonly mfaOtcEmail!: pulumi.Output<outputs.WorkspaceMfaOtcEmail | undefined>;
    /**
     * Configures the multi-factor authentication (MFA) policy.
     */
    public readonly mfaPolicy!: pulumi.Output<outputs.WorkspaceMfaPolicy>;
    /**
     * Configures the MFA recovery code email.
     */
    public readonly mfaRecoveryCodeEmail!: pulumi.Output<outputs.WorkspaceMfaRecoveryCodeEmail | undefined>;
    /**
     * Configures the MFA unenroll email.
     */
    public readonly mfaUnenrollEmail!: pulumi.Output<outputs.WorkspaceMfaUnenrollEmail | undefined>;
    /**
     * Configures social login with Google.
     */
    public readonly microsoftSocialLogin!: pulumi.Output<outputs.WorkspaceMicrosoftSocialLogin | undefined>;
    /**
     * The name of the workspace.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Configures the new device connected email.
     */
    public readonly newDeviceConnectedEmail!: pulumi.Output<outputs.WorkspaceNewDeviceConnectedEmail | undefined>;
    /**
     * Configures the new MFA method email.
     */
    public readonly newMfaMethodEmail!: pulumi.Output<outputs.WorkspaceNewMfaMethodEmail | undefined>;
    /**
     * Configures SSO via OIDC.
     */
    public readonly oidc!: pulumi.Output<outputs.WorkspaceOidc | undefined>;
    /**
     * Whether the application associated with the workspace has OpenSaaS installed.
     */
    public readonly openSaasInstalled!: pulumi.Output<boolean>;
    /**
     * Configures the password policy.
     */
    public readonly passwordPolicy!: pulumi.Output<outputs.WorkspacePasswordPolicy>;
    /**
     * Configures the pwned password email.
     */
    public readonly pwnedPasswordEmail!: pulumi.Output<outputs.WorkspacePwnedPasswordEmail | undefined>;
    /**
     * Configures the remove MFA method email.
     */
    public readonly removeMfaMethodEmail!: pulumi.Output<outputs.WorkspaceRemoveMfaMethodEmail | undefined>;
    /**
     * Configures the password reset email.
     */
    public readonly resetPasswordEmail!: pulumi.Output<outputs.WorkspaceResetPasswordEmail | undefined>;
    /**
     * Configures the reset phone number email.
     */
    public readonly resetPhoneNumberEmail!: pulumi.Output<outputs.WorkspaceResetPhoneNumberEmail | undefined>;
    /**
     * Configures SSO via SAML.
     */
    public readonly saml!: pulumi.Output<outputs.WorkspaceSaml | undefined>;
    /**
     * Configures the SMS authentication enabled email.
     */
    public readonly smsAuthenticationEnabledEmail!: pulumi.Output<outputs.WorkspaceSmsAuthenticationEnabledEmail | undefined>;
    /**
     * Configures how SSO domains are validated.
     */
    public readonly ssoDomainPolicy!: pulumi.Output<outputs.WorkspaceSsoDomainPolicy | undefined>;
    /**
     * Configures how multiple tenants can claim the same SSO domain.
     */
    public readonly ssoMultiTenantPolicy!: pulumi.Output<outputs.WorkspaceSsoMultiTenantPolicy | undefined>;
    /**
     * Configures the suspicious IP email.
     */
    public readonly suspiciousIpEmail!: pulumi.Output<outputs.WorkspaceSuspiciousIpEmail | undefined>;
    /**
     * Configures the user activation email.
     */
    public readonly userActivationEmail!: pulumi.Output<outputs.WorkspaceUserActivationEmail | undefined>;
    /**
     * Configures the user invitation email.
     */
    public readonly userInvitationEmail!: pulumi.Output<outputs.WorkspaceUserInvitationEmail | undefined>;
    /**
     * Configures the user used invitation email.
     */
    public readonly userUsedInvitationEmail!: pulumi.Output<outputs.WorkspaceUserUsedInvitationEmail | undefined>;

    /**
     * Create a Workspace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WorkspaceArgs | WorkspaceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WorkspaceState | undefined;
            resourceInputs["adminPortal"] = state ? state.adminPortal : undefined;
            resourceInputs["allowedOrigins"] = state ? state.allowedOrigins : undefined;
            resourceInputs["authPolicy"] = state ? state.authPolicy : undefined;
            resourceInputs["backendStack"] = state ? state.backendStack : undefined;
            resourceInputs["botDetectionEmail"] = state ? state.botDetectionEmail : undefined;
            resourceInputs["bruteForceProtectionEmail"] = state ? state.bruteForceProtectionEmail : undefined;
            resourceInputs["bulkTenantsInvitesEmail"] = state ? state.bulkTenantsInvitesEmail : undefined;
            resourceInputs["captchaPolicy"] = state ? state.captchaPolicy : undefined;
            resourceInputs["country"] = state ? state.country : undefined;
            resourceInputs["customDomains"] = state ? state.customDomains : undefined;
            resourceInputs["emailVerificationEmail"] = state ? state.emailVerificationEmail : undefined;
            resourceInputs["facebookSocialLogin"] = state ? state.facebookSocialLogin : undefined;
            resourceInputs["fronteggDomain"] = state ? state.fronteggDomain : undefined;
            resourceInputs["frontendStack"] = state ? state.frontendStack : undefined;
            resourceInputs["githubSocialLogin"] = state ? state.githubSocialLogin : undefined;
            resourceInputs["googleSocialLogin"] = state ? state.googleSocialLogin : undefined;
            resourceInputs["hostedLogin"] = state ? state.hostedLogin : undefined;
            resourceInputs["impossibleTravelEmail"] = state ? state.impossibleTravelEmail : undefined;
            resourceInputs["lockoutPolicy"] = state ? state.lockoutPolicy : undefined;
            resourceInputs["magicCodeEmail"] = state ? state.magicCodeEmail : undefined;
            resourceInputs["magicLinkEmail"] = state ? state.magicLinkEmail : undefined;
            resourceInputs["mfaAuthenticationApp"] = state ? state.mfaAuthenticationApp : undefined;
            resourceInputs["mfaEnrollEmail"] = state ? state.mfaEnrollEmail : undefined;
            resourceInputs["mfaOtcEmail"] = state ? state.mfaOtcEmail : undefined;
            resourceInputs["mfaPolicy"] = state ? state.mfaPolicy : undefined;
            resourceInputs["mfaRecoveryCodeEmail"] = state ? state.mfaRecoveryCodeEmail : undefined;
            resourceInputs["mfaUnenrollEmail"] = state ? state.mfaUnenrollEmail : undefined;
            resourceInputs["microsoftSocialLogin"] = state ? state.microsoftSocialLogin : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["newDeviceConnectedEmail"] = state ? state.newDeviceConnectedEmail : undefined;
            resourceInputs["newMfaMethodEmail"] = state ? state.newMfaMethodEmail : undefined;
            resourceInputs["oidc"] = state ? state.oidc : undefined;
            resourceInputs["openSaasInstalled"] = state ? state.openSaasInstalled : undefined;
            resourceInputs["passwordPolicy"] = state ? state.passwordPolicy : undefined;
            resourceInputs["pwnedPasswordEmail"] = state ? state.pwnedPasswordEmail : undefined;
            resourceInputs["removeMfaMethodEmail"] = state ? state.removeMfaMethodEmail : undefined;
            resourceInputs["resetPasswordEmail"] = state ? state.resetPasswordEmail : undefined;
            resourceInputs["resetPhoneNumberEmail"] = state ? state.resetPhoneNumberEmail : undefined;
            resourceInputs["saml"] = state ? state.saml : undefined;
            resourceInputs["smsAuthenticationEnabledEmail"] = state ? state.smsAuthenticationEnabledEmail : undefined;
            resourceInputs["ssoDomainPolicy"] = state ? state.ssoDomainPolicy : undefined;
            resourceInputs["ssoMultiTenantPolicy"] = state ? state.ssoMultiTenantPolicy : undefined;
            resourceInputs["suspiciousIpEmail"] = state ? state.suspiciousIpEmail : undefined;
            resourceInputs["userActivationEmail"] = state ? state.userActivationEmail : undefined;
            resourceInputs["userInvitationEmail"] = state ? state.userInvitationEmail : undefined;
            resourceInputs["userUsedInvitationEmail"] = state ? state.userUsedInvitationEmail : undefined;
        } else {
            const args = argsOrState as WorkspaceArgs | undefined;
            if ((!args || args.adminPortal === undefined) && !opts.urn) {
                throw new Error("Missing required property 'adminPortal'");
            }
            if ((!args || args.allowedOrigins === undefined) && !opts.urn) {
                throw new Error("Missing required property 'allowedOrigins'");
            }
            if ((!args || args.authPolicy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authPolicy'");
            }
            if ((!args || args.backendStack === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backendStack'");
            }
            if ((!args || args.country === undefined) && !opts.urn) {
                throw new Error("Missing required property 'country'");
            }
            if ((!args || args.fronteggDomain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fronteggDomain'");
            }
            if ((!args || args.frontendStack === undefined) && !opts.urn) {
                throw new Error("Missing required property 'frontendStack'");
            }
            if ((!args || args.mfaPolicy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mfaPolicy'");
            }
            if ((!args || args.openSaasInstalled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'openSaasInstalled'");
            }
            if ((!args || args.passwordPolicy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'passwordPolicy'");
            }
            resourceInputs["adminPortal"] = args ? args.adminPortal : undefined;
            resourceInputs["allowedOrigins"] = args ? args.allowedOrigins : undefined;
            resourceInputs["authPolicy"] = args ? args.authPolicy : undefined;
            resourceInputs["backendStack"] = args ? args.backendStack : undefined;
            resourceInputs["botDetectionEmail"] = args ? args.botDetectionEmail : undefined;
            resourceInputs["bruteForceProtectionEmail"] = args ? args.bruteForceProtectionEmail : undefined;
            resourceInputs["bulkTenantsInvitesEmail"] = args ? args.bulkTenantsInvitesEmail : undefined;
            resourceInputs["captchaPolicy"] = args ? args.captchaPolicy : undefined;
            resourceInputs["country"] = args ? args.country : undefined;
            resourceInputs["customDomains"] = args ? args.customDomains : undefined;
            resourceInputs["emailVerificationEmail"] = args ? args.emailVerificationEmail : undefined;
            resourceInputs["facebookSocialLogin"] = args ? args.facebookSocialLogin : undefined;
            resourceInputs["fronteggDomain"] = args ? args.fronteggDomain : undefined;
            resourceInputs["frontendStack"] = args ? args.frontendStack : undefined;
            resourceInputs["githubSocialLogin"] = args ? args.githubSocialLogin : undefined;
            resourceInputs["googleSocialLogin"] = args ? args.googleSocialLogin : undefined;
            resourceInputs["hostedLogin"] = args ? args.hostedLogin : undefined;
            resourceInputs["impossibleTravelEmail"] = args ? args.impossibleTravelEmail : undefined;
            resourceInputs["lockoutPolicy"] = args ? args.lockoutPolicy : undefined;
            resourceInputs["magicCodeEmail"] = args ? args.magicCodeEmail : undefined;
            resourceInputs["magicLinkEmail"] = args ? args.magicLinkEmail : undefined;
            resourceInputs["mfaAuthenticationApp"] = args ? args.mfaAuthenticationApp : undefined;
            resourceInputs["mfaEnrollEmail"] = args ? args.mfaEnrollEmail : undefined;
            resourceInputs["mfaOtcEmail"] = args ? args.mfaOtcEmail : undefined;
            resourceInputs["mfaPolicy"] = args ? args.mfaPolicy : undefined;
            resourceInputs["mfaRecoveryCodeEmail"] = args ? args.mfaRecoveryCodeEmail : undefined;
            resourceInputs["mfaUnenrollEmail"] = args ? args.mfaUnenrollEmail : undefined;
            resourceInputs["microsoftSocialLogin"] = args ? args.microsoftSocialLogin : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["newDeviceConnectedEmail"] = args ? args.newDeviceConnectedEmail : undefined;
            resourceInputs["newMfaMethodEmail"] = args ? args.newMfaMethodEmail : undefined;
            resourceInputs["oidc"] = args ? args.oidc : undefined;
            resourceInputs["openSaasInstalled"] = args ? args.openSaasInstalled : undefined;
            resourceInputs["passwordPolicy"] = args ? args.passwordPolicy : undefined;
            resourceInputs["pwnedPasswordEmail"] = args ? args.pwnedPasswordEmail : undefined;
            resourceInputs["removeMfaMethodEmail"] = args ? args.removeMfaMethodEmail : undefined;
            resourceInputs["resetPasswordEmail"] = args ? args.resetPasswordEmail : undefined;
            resourceInputs["resetPhoneNumberEmail"] = args ? args.resetPhoneNumberEmail : undefined;
            resourceInputs["saml"] = args ? args.saml : undefined;
            resourceInputs["smsAuthenticationEnabledEmail"] = args ? args.smsAuthenticationEnabledEmail : undefined;
            resourceInputs["ssoDomainPolicy"] = args ? args.ssoDomainPolicy : undefined;
            resourceInputs["ssoMultiTenantPolicy"] = args ? args.ssoMultiTenantPolicy : undefined;
            resourceInputs["suspiciousIpEmail"] = args ? args.suspiciousIpEmail : undefined;
            resourceInputs["userActivationEmail"] = args ? args.userActivationEmail : undefined;
            resourceInputs["userInvitationEmail"] = args ? args.userInvitationEmail : undefined;
            resourceInputs["userUsedInvitationEmail"] = args ? args.userUsedInvitationEmail : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Workspace.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Workspace resources.
 */
export interface WorkspaceState {
    /**
     * Configures the admin portal.
     */
    adminPortal?: pulumi.Input<inputs.WorkspaceAdminPortal>;
    /**
     * The origins that are allowed to access the workspace. This parameter controls the value of the "Origin" header for API
     * responses.
     */
    allowedOrigins?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Configures the general authentication policy.
     */
    authPolicy?: pulumi.Input<inputs.WorkspaceAuthPolicy>;
    /**
     * The backend stack of the application associated with the workspace.
     */
    backendStack?: pulumi.Input<string>;
    /**
     * Configures the bot detection email.
     */
    botDetectionEmail?: pulumi.Input<inputs.WorkspaceBotDetectionEmail>;
    /**
     * Configures the brute force protection email.
     */
    bruteForceProtectionEmail?: pulumi.Input<inputs.WorkspaceBruteForceProtectionEmail>;
    /**
     * Configures the bulk tenants invite email.
     */
    bulkTenantsInvitesEmail?: pulumi.Input<inputs.WorkspaceBulkTenantsInvitesEmail>;
    /**
     * Configures the CAPTCHA policy in the signup form.
     */
    captchaPolicy?: pulumi.Input<inputs.WorkspaceCaptchaPolicy>;
    /**
     * The country associated with the workspace.
     */
    country?: pulumi.Input<string>;
    /**
     * List of custom domains at which Frontegg services will be reachable. You must configure CNAME for each domain, you can
     * get record values from the portal.
     */
    customDomains?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Configures the verification email.
     */
    emailVerificationEmail?: pulumi.Input<inputs.WorkspaceEmailVerificationEmail>;
    /**
     * Configures social login with Facebook.
     */
    facebookSocialLogin?: pulumi.Input<inputs.WorkspaceFacebookSocialLogin>;
    /**
     * The domain at which the Frontegg API is served for this workspace. The domain must end with ".frontegg.com" or
     * ".us.frontegg.com".
     */
    fronteggDomain?: pulumi.Input<string>;
    /**
     * The frontend stack of the application associated with the worksapce.
     */
    frontendStack?: pulumi.Input<string>;
    /**
     * Configures social login with GitHub.
     */
    githubSocialLogin?: pulumi.Input<inputs.WorkspaceGithubSocialLogin>;
    /**
     * Configures social login with Google.
     */
    googleSocialLogin?: pulumi.Input<inputs.WorkspaceGoogleSocialLogin>;
    /**
     * Configures Frontegg-hosted OAuth login.
     */
    hostedLogin?: pulumi.Input<inputs.WorkspaceHostedLogin>;
    /**
     * Configures the impossible travel email.
     */
    impossibleTravelEmail?: pulumi.Input<inputs.WorkspaceImpossibleTravelEmail>;
    /**
     * Configures the user lockout policy.
     */
    lockoutPolicy?: pulumi.Input<inputs.WorkspaceLockoutPolicy>;
    /**
     * Configures the one time code email.
     */
    magicCodeEmail?: pulumi.Input<inputs.WorkspaceMagicCodeEmail>;
    /**
     * Configures the magic link email.
     */
    magicLinkEmail?: pulumi.Input<inputs.WorkspaceMagicLinkEmail>;
    /**
     * Configures the multi-factor authentication (MFA) via an authentication app.
     */
    mfaAuthenticationApp?: pulumi.Input<inputs.WorkspaceMfaAuthenticationApp>;
    /**
     * Configures the MFA enroll email.
     */
    mfaEnrollEmail?: pulumi.Input<inputs.WorkspaceMfaEnrollEmail>;
    /**
     * Configures the account challenge with code email.
     */
    mfaOtcEmail?: pulumi.Input<inputs.WorkspaceMfaOtcEmail>;
    /**
     * Configures the multi-factor authentication (MFA) policy.
     */
    mfaPolicy?: pulumi.Input<inputs.WorkspaceMfaPolicy>;
    /**
     * Configures the MFA recovery code email.
     */
    mfaRecoveryCodeEmail?: pulumi.Input<inputs.WorkspaceMfaRecoveryCodeEmail>;
    /**
     * Configures the MFA unenroll email.
     */
    mfaUnenrollEmail?: pulumi.Input<inputs.WorkspaceMfaUnenrollEmail>;
    /**
     * Configures social login with Google.
     */
    microsoftSocialLogin?: pulumi.Input<inputs.WorkspaceMicrosoftSocialLogin>;
    /**
     * The name of the workspace.
     */
    name?: pulumi.Input<string>;
    /**
     * Configures the new device connected email.
     */
    newDeviceConnectedEmail?: pulumi.Input<inputs.WorkspaceNewDeviceConnectedEmail>;
    /**
     * Configures the new MFA method email.
     */
    newMfaMethodEmail?: pulumi.Input<inputs.WorkspaceNewMfaMethodEmail>;
    /**
     * Configures SSO via OIDC.
     */
    oidc?: pulumi.Input<inputs.WorkspaceOidc>;
    /**
     * Whether the application associated with the workspace has OpenSaaS installed.
     */
    openSaasInstalled?: pulumi.Input<boolean>;
    /**
     * Configures the password policy.
     */
    passwordPolicy?: pulumi.Input<inputs.WorkspacePasswordPolicy>;
    /**
     * Configures the pwned password email.
     */
    pwnedPasswordEmail?: pulumi.Input<inputs.WorkspacePwnedPasswordEmail>;
    /**
     * Configures the remove MFA method email.
     */
    removeMfaMethodEmail?: pulumi.Input<inputs.WorkspaceRemoveMfaMethodEmail>;
    /**
     * Configures the password reset email.
     */
    resetPasswordEmail?: pulumi.Input<inputs.WorkspaceResetPasswordEmail>;
    /**
     * Configures the reset phone number email.
     */
    resetPhoneNumberEmail?: pulumi.Input<inputs.WorkspaceResetPhoneNumberEmail>;
    /**
     * Configures SSO via SAML.
     */
    saml?: pulumi.Input<inputs.WorkspaceSaml>;
    /**
     * Configures the SMS authentication enabled email.
     */
    smsAuthenticationEnabledEmail?: pulumi.Input<inputs.WorkspaceSmsAuthenticationEnabledEmail>;
    /**
     * Configures how SSO domains are validated.
     */
    ssoDomainPolicy?: pulumi.Input<inputs.WorkspaceSsoDomainPolicy>;
    /**
     * Configures how multiple tenants can claim the same SSO domain.
     */
    ssoMultiTenantPolicy?: pulumi.Input<inputs.WorkspaceSsoMultiTenantPolicy>;
    /**
     * Configures the suspicious IP email.
     */
    suspiciousIpEmail?: pulumi.Input<inputs.WorkspaceSuspiciousIpEmail>;
    /**
     * Configures the user activation email.
     */
    userActivationEmail?: pulumi.Input<inputs.WorkspaceUserActivationEmail>;
    /**
     * Configures the user invitation email.
     */
    userInvitationEmail?: pulumi.Input<inputs.WorkspaceUserInvitationEmail>;
    /**
     * Configures the user used invitation email.
     */
    userUsedInvitationEmail?: pulumi.Input<inputs.WorkspaceUserUsedInvitationEmail>;
}

/**
 * The set of arguments for constructing a Workspace resource.
 */
export interface WorkspaceArgs {
    /**
     * Configures the admin portal.
     */
    adminPortal: pulumi.Input<inputs.WorkspaceAdminPortal>;
    /**
     * The origins that are allowed to access the workspace. This parameter controls the value of the "Origin" header for API
     * responses.
     */
    allowedOrigins: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Configures the general authentication policy.
     */
    authPolicy: pulumi.Input<inputs.WorkspaceAuthPolicy>;
    /**
     * The backend stack of the application associated with the workspace.
     */
    backendStack: pulumi.Input<string>;
    /**
     * Configures the bot detection email.
     */
    botDetectionEmail?: pulumi.Input<inputs.WorkspaceBotDetectionEmail>;
    /**
     * Configures the brute force protection email.
     */
    bruteForceProtectionEmail?: pulumi.Input<inputs.WorkspaceBruteForceProtectionEmail>;
    /**
     * Configures the bulk tenants invite email.
     */
    bulkTenantsInvitesEmail?: pulumi.Input<inputs.WorkspaceBulkTenantsInvitesEmail>;
    /**
     * Configures the CAPTCHA policy in the signup form.
     */
    captchaPolicy?: pulumi.Input<inputs.WorkspaceCaptchaPolicy>;
    /**
     * The country associated with the workspace.
     */
    country: pulumi.Input<string>;
    /**
     * List of custom domains at which Frontegg services will be reachable. You must configure CNAME for each domain, you can
     * get record values from the portal.
     */
    customDomains?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Configures the verification email.
     */
    emailVerificationEmail?: pulumi.Input<inputs.WorkspaceEmailVerificationEmail>;
    /**
     * Configures social login with Facebook.
     */
    facebookSocialLogin?: pulumi.Input<inputs.WorkspaceFacebookSocialLogin>;
    /**
     * The domain at which the Frontegg API is served for this workspace. The domain must end with ".frontegg.com" or
     * ".us.frontegg.com".
     */
    fronteggDomain: pulumi.Input<string>;
    /**
     * The frontend stack of the application associated with the worksapce.
     */
    frontendStack: pulumi.Input<string>;
    /**
     * Configures social login with GitHub.
     */
    githubSocialLogin?: pulumi.Input<inputs.WorkspaceGithubSocialLogin>;
    /**
     * Configures social login with Google.
     */
    googleSocialLogin?: pulumi.Input<inputs.WorkspaceGoogleSocialLogin>;
    /**
     * Configures Frontegg-hosted OAuth login.
     */
    hostedLogin?: pulumi.Input<inputs.WorkspaceHostedLogin>;
    /**
     * Configures the impossible travel email.
     */
    impossibleTravelEmail?: pulumi.Input<inputs.WorkspaceImpossibleTravelEmail>;
    /**
     * Configures the user lockout policy.
     */
    lockoutPolicy?: pulumi.Input<inputs.WorkspaceLockoutPolicy>;
    /**
     * Configures the one time code email.
     */
    magicCodeEmail?: pulumi.Input<inputs.WorkspaceMagicCodeEmail>;
    /**
     * Configures the magic link email.
     */
    magicLinkEmail?: pulumi.Input<inputs.WorkspaceMagicLinkEmail>;
    /**
     * Configures the multi-factor authentication (MFA) via an authentication app.
     */
    mfaAuthenticationApp?: pulumi.Input<inputs.WorkspaceMfaAuthenticationApp>;
    /**
     * Configures the MFA enroll email.
     */
    mfaEnrollEmail?: pulumi.Input<inputs.WorkspaceMfaEnrollEmail>;
    /**
     * Configures the account challenge with code email.
     */
    mfaOtcEmail?: pulumi.Input<inputs.WorkspaceMfaOtcEmail>;
    /**
     * Configures the multi-factor authentication (MFA) policy.
     */
    mfaPolicy: pulumi.Input<inputs.WorkspaceMfaPolicy>;
    /**
     * Configures the MFA recovery code email.
     */
    mfaRecoveryCodeEmail?: pulumi.Input<inputs.WorkspaceMfaRecoveryCodeEmail>;
    /**
     * Configures the MFA unenroll email.
     */
    mfaUnenrollEmail?: pulumi.Input<inputs.WorkspaceMfaUnenrollEmail>;
    /**
     * Configures social login with Google.
     */
    microsoftSocialLogin?: pulumi.Input<inputs.WorkspaceMicrosoftSocialLogin>;
    /**
     * The name of the workspace.
     */
    name?: pulumi.Input<string>;
    /**
     * Configures the new device connected email.
     */
    newDeviceConnectedEmail?: pulumi.Input<inputs.WorkspaceNewDeviceConnectedEmail>;
    /**
     * Configures the new MFA method email.
     */
    newMfaMethodEmail?: pulumi.Input<inputs.WorkspaceNewMfaMethodEmail>;
    /**
     * Configures SSO via OIDC.
     */
    oidc?: pulumi.Input<inputs.WorkspaceOidc>;
    /**
     * Whether the application associated with the workspace has OpenSaaS installed.
     */
    openSaasInstalled: pulumi.Input<boolean>;
    /**
     * Configures the password policy.
     */
    passwordPolicy: pulumi.Input<inputs.WorkspacePasswordPolicy>;
    /**
     * Configures the pwned password email.
     */
    pwnedPasswordEmail?: pulumi.Input<inputs.WorkspacePwnedPasswordEmail>;
    /**
     * Configures the remove MFA method email.
     */
    removeMfaMethodEmail?: pulumi.Input<inputs.WorkspaceRemoveMfaMethodEmail>;
    /**
     * Configures the password reset email.
     */
    resetPasswordEmail?: pulumi.Input<inputs.WorkspaceResetPasswordEmail>;
    /**
     * Configures the reset phone number email.
     */
    resetPhoneNumberEmail?: pulumi.Input<inputs.WorkspaceResetPhoneNumberEmail>;
    /**
     * Configures SSO via SAML.
     */
    saml?: pulumi.Input<inputs.WorkspaceSaml>;
    /**
     * Configures the SMS authentication enabled email.
     */
    smsAuthenticationEnabledEmail?: pulumi.Input<inputs.WorkspaceSmsAuthenticationEnabledEmail>;
    /**
     * Configures how SSO domains are validated.
     */
    ssoDomainPolicy?: pulumi.Input<inputs.WorkspaceSsoDomainPolicy>;
    /**
     * Configures how multiple tenants can claim the same SSO domain.
     */
    ssoMultiTenantPolicy?: pulumi.Input<inputs.WorkspaceSsoMultiTenantPolicy>;
    /**
     * Configures the suspicious IP email.
     */
    suspiciousIpEmail?: pulumi.Input<inputs.WorkspaceSuspiciousIpEmail>;
    /**
     * Configures the user activation email.
     */
    userActivationEmail?: pulumi.Input<inputs.WorkspaceUserActivationEmail>;
    /**
     * Configures the user invitation email.
     */
    userInvitationEmail?: pulumi.Input<inputs.WorkspaceUserInvitationEmail>;
    /**
     * Configures the user used invitation email.
     */
    userUsedInvitationEmail?: pulumi.Input<inputs.WorkspaceUserUsedInvitationEmail>;
}
