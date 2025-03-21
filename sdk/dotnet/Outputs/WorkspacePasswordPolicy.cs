// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Frontegg.Outputs
{

    [OutputType]
    public sealed class WorkspacePasswordPolicy
    {
        public readonly bool AllowPassphrases;
        /// <summary>
        /// The number of historical passwords to prevent users from reusing. Set to zero to disable.
        /// </summary>
        public readonly int History;
        /// <summary>
        /// The maximum length of a password.
        /// </summary>
        public readonly int MaxLength;
        /// <summary>
        /// The minimum length of a password.
        /// </summary>
        public readonly int MinLength;
        public readonly int MinPhraseLength;
        /// <summary>
        /// The minimum number of strength tests the password must meet.
        /// </summary>
        public readonly int MinTests;

        [OutputConstructor]
        private WorkspacePasswordPolicy(
            bool allowPassphrases,

            int history,

            int maxLength,

            int minLength,

            int minPhraseLength,

            int minTests)
        {
            AllowPassphrases = allowPassphrases;
            History = history;
            MaxLength = maxLength;
            MinLength = minLength;
            MinPhraseLength = minPhraseLength;
            MinTests = minTests;
        }
    }
}
